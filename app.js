

const express = require('express');
const app = express();
const fs = require('fs');

const parser = require('body-parser');
app.use(parser.json());

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile("/public/index.html");
}) 

app.get('/read', (req, res) => {    
    res.end(fs.readFileSync('server/data/posts.json', 'utf8'));
});

app.post('/write', (req, res) => {
    fs.writeFileSync('server/data/posts.json', JSON.stringify (req.body));
    res.end();
});

app.get('/getPhotoPost', (req, res)=>{
    var photoPosts = JSON.parse (fs.readFileSync('server/data/posts.json', 'utf8'));
    var post = photoPosts.find((post) => req.query.id === post.id);
    if(post){
        post.createdAt = new Date(post.createdAt);
        res.send (post);
    }
    else{
        res.send ("Пост не найден");
        res.status(404).end();
    }
});

app.delete('/removePhotoPost', (req, res)=>{
    let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    var post = photoPosts.find((post) => req.query.id === post.id);
    if (post) {
        photoPosts.splice(photoPosts.indexOf(post), 1);
        fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
        post.createdAt = new Date(post.createdAt); 
        res.send (post);
       
    }
    else {
        res.send ("Пост не найден");
    	res.status(404).end();
    }
   
});

    function comparator(a,b){
        return b.createdAt - a.createdAt;
    }

    let validatePhotoPost = function(photoPost){
    var val = {
        id: function(){
            return typeof photoPost.id !== 'string'
        },
        description: function(){ 
            return typeof photoPost.description !== 'string' || photoPost.description.length >= 200
        },
        createdAt: function(){
             return typeof photoPost.createdAt !== 'object'
        },
        author: function(){ 
            return typeof photoPost.author !== 'string' || photoPost.author.length === 0
        },
        photoLink: function(){
            return typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0
        },
        hashTags:  function(){
            if(photoPost.hashTags){
                if(typeof photoPost.hashTags === 'string' ){
                    photoPost.hashTags = photoPost.hashTags.split(" ");
                }
            return photoPost.hashTags.some(function (tag) {return typeof tag !== 'string';});
            }
        },
        likes: function(){
            if(photoPost.likes !== undefined ) {
                return photoPost.likes.some(function (like)  {
                    return typeof like !== 'string';
                });
            }
        }
    }
    for (var key in val){
        if(val[key]() === true){
            return key;
        }
    }
    return true;
}


app.post('/getPhotoPosts', (req,res)=>{
    let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    let filterConfig = req.body;
    skip = req.query.skip || 0;
    top = req.query.top || 10;
    photoPosts.forEach ((post) => {post.createdAt = new Date (post.createdAt);});
    var filterPhotoPosts = photoPosts;
    if(filterConfig){
        filterPhotoPosts = photoPosts.filter(function(photoPost){
        if(filterConfig.author){
            if (photoPost.author.indexOf(filterConfig.author) === -1){
                return false;
                }
            }
            if(filterConfig.createdAt){
                filterConfig.createdAt = new Date(filterConfig.createdAt);
                if(photoPost.createdAt.getFullYear() !== filterConfig.createdAt.getFullYear()
                    || photoPost.createdAt.getMonth() !== filterConfig.createdAt.getMonth()
                    || photoPost.createdAt.getDate() !== filterConfig.createdAt.getDate()){
                        return false;
                    }
                 }
            if(filterConfig.hashTags && photoPost.hashTags){
                if(!filterConfig.hashTags.every(function (tag) {
                    return photoPost.hashTags.includes(tag);
                    })){
                return false;
                }
            }
            if(filterConfig.hashTags && !photoPost.hashTags){
                return false;
            }
            return true;
            });
        }

    filterPhotoPosts.sort(comparator);
    filterPhotoPosts = filterPhotoPosts.slice(Number(skip),Number(top)+Number(skip));
    if(filterPhotoPosts){
        res.send(filterPhotoPosts);
    }
    else{
        res.send ("Посты не найдены");
    	res.status(404).end();
    }
});

app.post('/addPhotoPost', (req, res)=>{
    let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    let post = req.body;
    post.createdAt = new Date (post.createdAt);

    if (validatePhotoPost(post)) {
        photoPosts.push(post);
        fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
        res.send ("Пост добавлен");
        res.status(200).end();
    }
    else{
        res.send ("Пост не добавлен");
        res.status(404).end();
    }
    
});


app.put('/editPhotoPost', (req,res)=>{
    let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    let post = req.body;

    var oldPost = photoPosts.find((post) => req.query.id === post.id);

    if (!oldPost) {
        res.send ("Пост не найден");
        res.status(404).end();
    }
    else {
        if (post.description && typeof post.description === "string" && post.description.length < 200) {
           oldPost.description = post.description;
        }
        if (post.photoLink && (typeof post.photoLink === "string")) {
            oldPost.photoLink = post.photoLink;
        }
        if(post.hashTags){
            oldPost.hashTags = [];
            post.hashTags.forEach(function(tag){
                if(typeof tag === 'string'){
                    oldPost.hashTags.push(tag);
                }
            });
        }
        fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
        res.send ("Пост изменён"); 
        res.status(200).end();
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен');
});

















