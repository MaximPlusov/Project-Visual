
let photoPosts = [
    {
        id: '1',
        description: 'My 1 trip!',
        createdAt: new Date('2018-03-04T01:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '2',
        description: 'My 2 trip!',
        createdAt: new Date('2018-03-04T02:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '3',
        description: 'My 3 trip!',
        createdAt: new Date('2018-03-04T03:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '4',
        description: 'My 4 trip!',
        createdAt: new Date('2008-03-04T04:00:00'),
        author: 'MaximPlusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '5',
        description: 'My 5 trip!',
        createdAt: new Date('2018-03-04T05:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '6',
        description: 'My 6 trip!',
        createdAt: new Date('2018-03-04T06:00:00'),
        author: 'MaximPlusov',
        photoLink: '1.jpg'
    },
    {
        id: '7',
        description: 'My 7 trip!',
        createdAt: new Date('2018-03-04T07:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '8',
        description: 'My 8 trip!',
        createdAt: new Date('2018-03-31T08:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '9',
        description: 'My 9 trip!',
        createdAt: new Date('2018-03-04T09:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '10',
        description: 'My 10 trip!',
        createdAt: new Date('2018-03-04T10:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '11',
        description: 'My 11 trip!',
        createdAt: new Date('2018-03-04T11:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '12',
        description: 'My 12 trip!',
        createdAt: new Date('2018-03-04T12:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '13',
        description: 'My 13 trip!',
        createdAt: new Date('2018-03-04T13:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '14',
        description: 'My 14 trip!',
        createdAt: new Date('2018-03-04T14:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '15',
        description: 'My 15 trip!',
        createdAt: new Date('2018-03-04T15:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '16',
        description: 'My 16 trip!',
        createdAt: new Date('2018-03-04T16:00:00'),
        author: 'Denis Belov',
        photoLink: '1.jpg',
        hashTags:['perfect','day']
    },
    {
        id: '17',
        description: 'My 17 trip!',
        createdAt: new Date('2018-03-04T17:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '18',
        description: 'My 18 trip!',
        createdAt: new Date('2018-03-04T18:00:00'),
        author: 'Maxim Rachok',
        photoLink: '1.jpg',
        hashTags:['life','best']
    },
    {
        id: '19',
        description: 'My 19 trip!',
        createdAt: new Date('2018-03-04T19:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg'
    },
    {
        id: '20',
        description: 'My 20 trip!',
        createdAt: new Date('2018-03-04T20:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        likes:['Maxim Plusov']
    }
]

var functional = (function () {

    let searchPhotoPost = function(id) {
        if(typeof id !== 'string' ){
            return false;
        }
        return photoPosts.findIndex(function(photoPost,i,photoPosts){
            if (photoPost.id === id) return true;
            return false;
        });
    }

    function comparator(a,b){
        return b.createdAt - a.createdAt;
    }

    let removePhotoPost = function(id){
        if(typeof id !== 'string' ){
            return false;
        }
        var i = searchPhotoPost(id);
        if(i !== -1){
            photoPosts.splice(i,1);
            return true;
        }
        return false;
    }

    let getPhotoPost = function(id){
        if(typeof id !== 'string' ){
            return null;
        }
        var i = searchPhotoPost(id);
        if(i !== -1){
            return photoPosts[i];
        }
        return null;
    }

    let getPhotoPosts = function(skip, top, filterConfig){
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || undefined;
        if(typeof skip !== 'number' ){
            return null;
        }
        if(typeof top !== 'number'){
            return null;
        }
        if(filterConfig){
            var filterPhotoPosts = photoPosts.filter(function(photoPost){
                if(filterConfig.author){
                    if (photoPost.author !== filterConfig.author){
                        return false;
                    }
                }
                if(filterConfig.createdAt){
                    if(photoPost.createdAt.getFullYear() !== filterConfig.createdAt.getFullYear()
                        || photoPost.createdAt.getMonth() !== filterConfig.createdAt.getMonth()
                        || photoPost.createdAt.getDate() !== filterConfig.createdAt.getDate()){
                        return false;
                    }
                }
                if(filterConfig.hashTags && photoPost.hashTags ){
                    if(!photoPost.hashTags.some(function (t) {
                            return filterConfig.hashTags.includes(t);
                        })){
                        return false;
                    }
                }
                return true;
            });
            filterPhotoPosts.sort(comparator);
            return filterPhotoPosts.slice(skip,top+skip);
        }
        photoPosts.sort(comparator);
        return photoPosts.slice(skip,top+skip);
    }

    let validatePhotoPost = function(photoPost){
        if(typeof  photoPost !== 'object'){
            return false;
        }
        var val = {
            id: function(){return typeof photoPost.id !== 'string'},
            description: function(){ return typeof photoPost.description !== 'string' || photoPost.description.length >= 200},
            createdAt: function(){ return typeof photoPost.createdAt !== 'object'},
            author: function(){ return typeof photoPost.author !== 'string' || photoPost.author.length === 0},
            photoLink: function(){return typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0},
            hashTags:  function(){if(photoPost.hashTags !== undefined){
                if(typeof photoPost.hashTags === 'string' ){
                    photoPost.hashTags = photoPost.hashTags.split(" ");
                }
                return photoPost.hashTags.some(function (t) {return typeof t !== 'string';});
            }},
            likes: function(){if(photoPost.likes !== undefined ) {
             return photoPost.likes.some(function (t)  {return typeof t !== 'string';});}}
        }
        for (var key in val){
            if(val[key]() === true){
                return false;
            }
        }
        return true;
    }

    let addPhotoPost = function(photoPost){
        if(typeof  photoPost !== 'object'){
            return false;
        }
        if(validatePhotoPost(photoPost)){
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    let editPhotoPost= function(id, photoPost) {
        if(typeof id !== 'string' ){
            return false;
        }
        if(typeof  photoPost !== 'object'){
            return false;
        }
        var i = searchPhotoPost(id);
        if(i !== -1){
            if(typeof photoPost.description === 'string'){
                photoPosts[i].description = photoPost.description;
            }
            if(typeof photoPost.photoLink === 'string'){
                photoPosts[i].photoLink = photoPost.photoLink;
            }
            if(photoPost.hashTags){
                photoPosts[i].hashTags = [];
                for(var j = 0;j < photoPost.hashTags.length;j++){
                    if(typeof photoPost.hashTags[j] === 'string'){
                        photoPosts[i].hashTags.push(photoPost.hashTags[j]);
                    }
                }
            }
            return true;
        }
        return false;
    }

    function log(){


        console.log("getPhotoPost('1')");
        console.log(getPhotoPost('1'));
        console.log("getPhotoPost('21')");
        console.log(getPhotoPost('21'));
        console.log("getPhotoPost(1)");
        console.log(getPhotoPost(1));

        console.log("removePhotoPost('2')");
        console.log(removePhotoPost('2'));
        console.log("getPhotoPost('2')");
        console.log(getPhotoPost('2'));
        console.log("removePhotoPost(1)");
        console.log(removePhotoPost(1));

        console.log("getPhotoPosts()");
        console.log(getPhotoPosts());
        console.log("getPhotoPosts('10')");
        console.log(getPhotoPosts('10'));
        console.log("getPhotoPosts(10)");
        console.log(getPhotoPosts(10));
        console.log("getPhotoPosts(10,15)");
        console.log(getPhotoPosts(10,15));
        console.log("getPhotoPosts(0,10,{author:'MaximPlusov'})");
        console.log(getPhotoPosts(0,10,{author:'MaximPlusov'}));
        console.log("getPhotoPosts(0,10,{createdAt: new Date('2018-03-04T01:00:00')})");
        console.log(getPhotoPosts(0,10,{createdAt: new Date('2018-03-04T01:00:00')}));
        console.log("getPhotoPosts(0,10,{author:'MaximPlusov',createdAt: new Date('2018-03-04T01:00:00')})");
        console.log(getPhotoPosts(0,10,{author:'MaximPlusov',createdAt: new Date('2018-03-04T01:00:00')}));
        console.log("getPhotoPosts(0,20,{hashTags:['life','day']})");
        console.log(getPhotoPosts(0,20,{hashTags:['life','day']}));

        console.log("validatePhotoPost(photoPosts[0])");
        console.log(validatePhotoPost(photoPosts[0]));
        console.log("validatePhotoPost({id:'1'})");
        console.log(validatePhotoPost({id:'1'}));
        console.log("validatePhotoPost({id: '1', descriprion: 'My 1 trip!', createdAt: new Date('2018-03-04T01:00:00'),author: 'Maxim Plusov',photoLink: '',hashTags:['perfect','best'],likes:['Maxim Plusov']})");
        console.log(validatePhotoPost({id: '1',
            descriprion: 'My 1 trip!',
            createdAt: new Date('2018-03-04T01:00:00'),
            author: 'Maxim Plusov',
            photoLink: '',
            hashTags:['perfect','best'],
            likes:['Maxim Plusov']}));
        console.log("validatePhotoPost({id: '1', descriprion: 'My 1 trip!', createdAt: new Date('2018-03-04T01:00:00'), author: 'Maxim Plusov', photoLink: 'http//car.jpg'})");
        console.log(validatePhotoPost({id: '1',
            descriprion: 'My 1 trip!',
            createdAt: new Date('2018-03-04T01:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http//car.jpg'}));

        console.log("addPhotoPost({id: '1', descriprion: 'My 1 trip!', createdAt: new Date('2018-03-04T01:00:00'), author: 'Maxim Plusov', photoLink: 'http//car.jpg'})");
        console.log(addPhotoPost({id: '1',
            descriprion: 'My 1 trip!',
            createdAt: new Date('2018-03-04T01:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http//car.jpg'}));
        console.log("photoPosts[19]");
        console.log(photoPosts[19]);
        console.log("addPhotoPost({id: '1', descriprion: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', createdAt: new Date('2018-03-04T01:00:00'), author: 'Maxim Plusov', photoLink: 'http//car.jpg'})");
        console.log(addPhotoPost({id: '1',
            descriprion: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
            createdAt: new Date('2018-03-04T01:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http//car.jpg'}));

        console.log("editPhotoPost('3',{description :'Hello!',hashTags:['love','friends'],photoLink:'http/1.jpg'})");
        console.log(editPhotoPost('3',{description :'Hello!',hashTags:['love','friends'],photoLink:'http/1.jpg'}));
        console.log("getPhotoPost('3')");
        console.log(getPhotoPost('3'));
        console.log("editPhotoPost('13',{description :'Hello!',hashTags:['love','friends'],photoLink:'http/1.jpg'})");
        console.log(editPhotoPost('13',{description :'Hello!',hashTags:['love','friends'],photoLink:'http/1.jpg'}));
    }

    //log();

    return {
        searchPhotoPost,
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    };

})();

const userName = 'Maxim Plusov';

var ModuleDOM = (function () {

    function getPhotoPost(post) {

        var photoPost = document.createElement('form');
        photoPost.setAttribute('class', 'post');
        photoPost.setAttribute('id', post.id);

        var author = document.createElement('div');
        author.setAttribute('class', 'author');
        author.textContent = post.author;
        photoPost.appendChild(author);

        if(userName === post.author){
            var del = document.createElement('img');
            del.setAttribute('class','delete');
            del.setAttribute('alt','delete.png');
            del.setAttribute('src','delete.png');
            photoPost.appendChild(del);

            var edit = document.createElement('img');
            edit.setAttribute('class','edit');
            edit.setAttribute('alt','edit.png');
            edit.setAttribute('src','edit.png');
            photoPost.appendChild(edit);
        }

        var time = document.createElement('div');
        time.setAttribute('class', 'time');
        time.textContent = post.createdAt.getDate() + " " + post.createdAt.getMonth() + " " + post.createdAt.toString().substring(10,21);
        photoPost.appendChild(time);

        var img = document.createElement('img');
        img.setAttribute('class','img');
        img.setAttribute('src', post.photoLink);
        img.setAttribute('alt', 'foto.png');
        photoPost.appendChild(img);

        var description = document.createElement('div');
        description.setAttribute('class', 'text');
        description.textContent = post.description;
        photoPost.appendChild(description);

        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));

        if(post.hashTags){
            for(var i = 0;i<post.hashTags.length;i++){
                var tag = document.createElement('div');
                tag.setAttribute('class','tag');
                tag.textContent = post.hashTags[i];
                photoPost.appendChild(tag);
            }
        }

        var numLike = document.createElement('div');
        numLike.setAttribute('class','num-like')
        if(post.likes){
            numLike.textContent = post.likes.length;
        }
        else{
            numLike.textContent = 0;
        }
        photoPost.appendChild(numLike);

        var like = document.createElement('img');
        like.setAttribute('class','like');
        like.setAttribute('src', 'like.png');
        like.setAttribute('alt', 'like.png');
        photoPost.appendChild(like);

        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));

        return photoPost;
    }

    function removePhotoPosts(){
        posts = document.getElementById('posts');
        var length = posts.childNodes.length;
        for (var i =  length - 1; i > -1; i--) {
            posts.removeChild(posts.childNodes[i]);
        }
    }

    let showPhotoPosts = function (photoPosts) {
        removePhotoPosts();
        var posts = document.getElementById('posts');
        photoPosts.forEach(function (post) {
            posts.appendChild(getPhotoPost(post));
        });
    };

    let addPhotoPosts = function (photoPosts) {
        var posts = document.getElementById('posts');
        photoPosts.forEach(function (value) {
            posts.appendChild(getPhotoPost(value));
        });
    };

    let removePhotoPost = function (id) {
        var posts = document.getElementById('posts');
        var childArray = Array.prototype.slice.call(posts.childNodes);
        var removePost = childArray.find(function (item) {
            return item.id === id;
        });
        if(removePost){
            posts.removeChild(removePost);
        }
    };

    let editPhotoPost = function (id, photoPost) {
        var posts = document.getElementById('posts');
        var childArray = Array.prototype.slice.call(posts.childNodes);
        var editPost = childArray.find(function (item) {
            return item.id === id;
        });
        posts.replaceChild(getPhotoPost(photoPost),editPost);
    };

    let showUserName = function (){
        var user = document.getElementById('username');
        if (userName !== null){
            user.textContent = userName;
            var header = document.getElementsByTagName('header')[0];
            var addPhotoPost = document.createElement('img');
            addPhotoPost.setAttribute('class','add-foto');
            addPhotoPost.setAttribute('alt','plus.png');
            addPhotoPost.setAttribute('src','plus.png');
            header.appendChild(addPhotoPost);
        }
        else{
            user.textContent = 'Sign in';
        }
    };

    let showPhotoPost = function(photoPost){
        var posts = document.getElementById('posts');
        posts.insertBefore(getPhotoPost(photoPost),posts.firstElementChild);
    }

    return {
        showPhotoPosts,
        removePhotoPost,
        editPhotoPost,
        showUserName,
        showPhotoPost,
        addPhotoPosts
    };
})();

function removePhotoPost(id) {
    if (functional.removePhotoPost(id)) {
        ModuleDOM.removePhotoPost(id);
        return true;
    }
    return false;
}

function editPhotoPost(id, photoPost) {
    if (functional.editPhotoPost(id, photoPost)) {
        ModuleDOM.editPhotoPost(id, functional.getPhotoPost(id));
        return true;
    }
     return false;
 }

function addPhotoPosts(filterConfig){
    posts = document.getElementById("posts");
    ModuleDOM.addPhotoPosts(functional.getPhotoPosts(posts.childNodes.length, 10,filterConfig));
}

function addPhotoPost(photoPost) {
    if (functional.addPhotoPost(photoPost)) {
        ModuleDOM.showPhotoPost(photoPost);
        return true;
    }
    return false;
}

function showPhotoPosts(filterConfig) {
    ModuleDOM.showPhotoPosts(functional.getPhotoPosts(0, 10, filterConfig));
}

function showUserName() {
     ModuleDOM.showUserName();
 }

 showUserName();
 showPhotoPosts();