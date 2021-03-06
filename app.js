const express = require('express');

const app = express();
const fs = require('fs');

const parser = require('body-parser');


const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');




app.use(parser.json());

app.use(express.static('public'));

app.use(cookieParser());
app.use(
    session({
        secret: 'first pat name',
        resave: false,
        saveUninitialized: false,
        cookie: {secure: false}
    })
);
app.use(passport.initialize());
app.use(passport.session());
//require('passport')(passport);
app.use(parser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
});

app.get('/getPhotoPost', (req, res) => {
    if(req.user) {
        const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
        const post = photoPosts.find(p => req.query.id === p.id);
        if (post) {
            post.createdAt = new Date(post.createdAt);
            res.status(200).send(post).end();
        } else {
            res.status(404).send('Пост не найден').end();
        }
    }
});

app.get('/getId', (req, res) => {
    if(req.user){
        const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
        let id = 1;
        photoPosts.forEach((post) => {
            if (Number(post.id) > id) {
            id = Number(post.id);
        }
    });
        id++;
        res.status(200).send(id.toString()).end();
    }
});

app.delete('/removePhotoPost', (req, res) => {
    if(req.user){
        const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
        const post = photoPosts.find(p => req.query.id === p.id);
        if (post) {
            photoPosts.splice(photoPosts.indexOf(post), 1);
            fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
            post.createdAt = new Date(post.createdAt);
            res.send(post).end();
        } else {
            res.status(404).send('Пост не найден').end();
        }
    }
});

function comparator(a, b) {
    return b.createdAt - a.createdAt;
}

const validatePhotoPost = function (photoPost) {
    const val = {
        id() {
            return typeof photoPost.id !== 'string';
        },
        description() {
            return typeof photoPost.description !== 'string' || photoPost.description.length >= 200;
        },
        createdAt() {
            return typeof photoPost.createdAt !== 'object';
        },
        author() {
            return typeof photoPost.author !== 'string' || photoPost.author.length === 0;
        },
        photoLink() {
            return typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0;
        },
        hashTags() {
            if (photoPost.hashTags) {
                if (typeof photoPost.hashTags === 'string') {
                    photoPost.hashTags = photoPost.hashTags.split(' ');
                }
                return photoPost.hashTags.some(tag => typeof tag !== 'string');
            }
        },
        likes() {
            if (photoPost.likes !== undefined) {
                return photoPost.likes.some(like => typeof like !== 'string');
            }
        },
    };
    for (const key in val) {
        if (val[key]() === true) {
            return key;
        }
    }
    return true;
};


app.post('/getPhotoPosts', (req, res) => {
    const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    const filterConfig = req.body;
    const skip = req.query.skip || 0;
    const top = req.query.top || 10;
    photoPosts.forEach((post) => {
        post.createdAt = new Date(post.createdAt);
    });
    let filterPhotoPosts = photoPosts;
    if (filterConfig) {
        filterPhotoPosts = photoPosts.filter((photoPost) => {
            if (filterConfig.author) {
            if (photoPost.author.indexOf(filterConfig.author) === -1) {
                return false;
            }
        }
        if (filterConfig.createdAt) {
            filterConfig.createdAt = new Date(filterConfig.createdAt);
            if (photoPost.createdAt.getFullYear() !== filterConfig.createdAt.getFullYear()
                || photoPost.createdAt.getMonth() !== filterConfig.createdAt.getMonth()
                || photoPost.createdAt.getDate() !== filterConfig.createdAt.getDate()) {
                return false;
            }
        }
        if (filterConfig.hashTags && photoPost.hashTags) {
            if (!filterConfig.hashTags.every(tag => photoPost.hashTags.includes(tag))) {
                return false;
            }
        }
        if (filterConfig.hashTags && !photoPost.hashTags) {
            return false;
        }
        return true;
        });
    }
    filterPhotoPosts.sort(comparator);
    filterPhotoPosts = filterPhotoPosts.slice(Number(skip), Number(top) + Number(skip));
    if (filterPhotoPosts) {
        res.send(filterPhotoPosts);
    } else {
        res.status(404).send('Посты не найдены').end();
    }
});

app.post('/addPhotoPost', (req, res) => {
    if(req.user){
        const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
        const post = req.body;
        post.createdAt = new Date(post.createdAt);

        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
            res.status(200).send('Пост добавлен').end();
        } else {
            res.status(404).send('Пост не добавлен').end();
        }
    }
});

app.put('/likePhotoPost', (req, res) => {
    if(req.user){
        const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
        const post = photoPosts.find(p => req.query.id === p.id);
        if (!post) {
            res.status(404).send('Пост не найден').end();
        } else if (post.author === req.query.user || req.query.user === null) {
            res.status(200).send('0').end();
        } else {
            const i = post.likes.findIndex(like => like === req.query.user);
            if (i !== -1) {
                post.likes.splice(i);
                fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
                res.status(200).send('2');
            } else {
                post.likes.push(req.query.user);
                fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
                res.status(200).send('1');
            }
        }
    }

});
app.put('/editPhotoPost', (req, res) => {
    if(req.user){
        const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));

        const oldPost = photoPosts.find(post => req.query.id === post.id);

        const post = req.body;

        if (!oldPost) {
            res.status(404).send('Пост не найден').end();
        } else {
            if (post.description && typeof post.description === 'string' && post.description.length < 200) {
                oldPost.description = post.description;
            }
            if (post.photoLink && (typeof post.photoLink === 'string')) {
                oldPost.photoLink = post.photoLink;
            }
            if (post.hashTags) {
                oldPost.hashTags = [];
                post.hashTags.forEach((tag) => {
                    if (typeof tag === 'string') {
                    oldPost.hashTags.push(tag);
                }
            });
            }
            fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
            res.status(200).send('Пост изменён').end();
        }
    }
});

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');


let cryptUsers = [];
const users = [
    {
        name: 'Maxim Plusov',
        password: '111',
    },
    {
        name: 'admin',
        password: 'admin',
    },
    {
        name: 'Maxim Rachok',
        password: '123',
    },
    {
        name: 'Denis Belov',
        password: '!!!',
    },
    {
        name: 'Sasha',
        password: '!@#',
    },
]
for (let i = 0; i < users.length; i++) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(users[i]['password'], salt, function (err, hash) {
            let crypUser = {
                name: users[i]["name"],
                password: hash,
            }
            cryptUsers.push(crypUser);
        })
    })
}


passport.use( new LocalStrategy(
    function (username, password, done) {
        let user = cryptUsers.find(u => u.name === username);
        if (user === undefined) {
            done(null, false);
        }
        if (bcrypt.compareSync(password, user.password)) {
            done(null, user)
        }
        else {
            done(null, false);
        }
    })
);


passport.serializeUser(function (user, done) {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
})

module.exports = passport;

app.post('/login', passport.authenticate('local'), function (req,res) {
    res.status(200).send(req.body.username);
});

app.listen(3000, () => {
    console.log('Сервер запущен');
});
