
let photoPosts = [
    {
        id: '1',
        description: 'My 1 trip!',
        createdAt: new Date('2018-04-01T01:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '2',
        description: 'My 2 trip!',
        createdAt: new Date('2018-04-01T02:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '3',
        description: 'My 3 trip!',
        createdAt: new Date('2018-04-01T03:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '4',
        description: 'My 4 trip!',
        createdAt: new Date('2018-04-01T04:00:00'),
        author: 'MaximPlusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '5',
        description: 'My 5 trip!',
        createdAt: new Date('2018-04-01T05:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        likes:[]
    },
    {
        id: '6',
        description: 'My 6 trip!',
        createdAt: new Date('2018-04-01T06:00:00'),
        author: 'MaximPlusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '7',
        description: 'My 7 trip!',
        createdAt: new Date('2018-04-01T07:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '8',
        description: 'My 8 trip!',
        createdAt: new Date('2018-04-01T08:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '9',
        description: 'My 9 trip!',
        createdAt: new Date('2018-04-01T09:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '10',
        description: 'My 10 trip!',
        createdAt: new Date('2018-04-01T10:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        hashTags:['perfect','best'],
        likes:['Maxim Plusov']
    },
    {
        id: '11',
        description: 'My 11 trip!',
        createdAt: new Date('2018-04-01T11:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '12',
        description: 'My 12 trip!',
        createdAt: new Date('2018-04-01T12:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '13',
        description: 'My 13 trip!',
        createdAt: new Date('2018-04-01T13:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'

    },
    {
        id: '14',
        description: 'My 14 trip!',
        createdAt: new Date('2018-04-01T14:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '15',
        description: 'My 15 trip!',
        createdAt: new Date('2018-04-01T15:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'

    },
    {
        id: '16',
        description: 'My 16 trip!',
        createdAt: new Date('2018-04-01T16:00:00'),
        author: 'Denis Belov',
        photoLink: '1.jpg',
        likes:[],
        hashTags:['perfect','day']

    },
    {
        id: '17',
        description: 'My 17 trip!',
        createdAt: new Date('2018-04-01T17:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '18',
        description: 'My 18 trip!',
        createdAt: new Date('2018-04-01T18:00:00'),
        author: 'Maxim Rachok',
        photoLink: '1.jpg',
        likes:[],
        hashTags:['life','best']
    },
    {
        id: '19',
        description: 'My 19 trip!',
        createdAt: new Date('2018-04-01T19:00:00'),
        author: 'Maxim Plusov',
        likes:[],
        photoLink: '1.jpg'
    },
    {
        id: '20',
        description: 'My 20 trip!',
        createdAt: new Date('2018-04-01T20:00:00'),
        author: 'Maxim Plusov',
        photoLink: '1.jpg',
        likes:['Maxim Plusov']
    }
]

let users = [
    {
        name: 'Maxim Plusov',
        password: '111'
    },
    {
        name: 'admin',
        password: 'admin'
    },
    {
        name: 'Maxim Rachok',
        password: '123'
    },
    {
        name: 'Denis Belov',
        password: '!!!'
    },
    {
        name: 'Sasha',
        password: '!@#'
    }
]

var functional = (function () {

    let searchPhotoPost = function(id) {
        if(typeof id !== 'string' ){
            return false;
        }
        return photoPosts.findIndex(function(photoPost,i,photoPosts){
            if (photoPost.id === id){
                return true;
            }
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
                return photoPost.hashTags.some(function (tag) {return typeof tag !== 'string';});
            }},
            likes: function(){if(photoPost.likes !== undefined ) {
             return photoPost.likes.some(function (like)  {return typeof like !== 'string';});}}
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
        if(typeof  photoPost !== 'object') {
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
                photoPost.hashTags.forEach(function(tag){
                   if(typeof tag === 'string'){
                       photoPosts[i].hashTags.push(tag);
                   }
                });
            }
            return true;
        }
        return false;
    }

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

var userName = null;

var id = 21;

var ModuleDOM = (function () {
    function getAddButon(){
        var add = document.createElement('img');
        add.setAttribute('class','add-posts');
        add.setAttribute('alt','plus.png');
        add.setAttribute('src','plus.png');
        add.setAttribute('id','add-posts');
        add.addEventListener('click',ModuleEvent.eventAddPhotoPosts);
        return add;
    }

    function removeLoginField(){
        var signIn = document.forms.signinfield;
        var length = signIn.childNodes.length;
        for (var i =  length - 1; i > -1; i--) {
            signIn.removeChild(signIn.childNodes[i]);
        }
        signIn.removeAttribute('class');
    }

    function removeAddPost(){
        var addPost = document.forms.addpost;
        var length = addPost.childNodes.length;
        for (var i =  length - 1; i > -1; i--) {
            addPost.removeChild(addPost.childNodes[i]);
        }
        addPost.removeAttribute('class');
    }

    function removeEditPost(){
        var editPost = document.forms.editpost;
        var length = editPost.childNodes.length;
        for (var i =  length - 1; i > -1; i--) {
            editPost.removeChild(editPost.childNodes[i]);
        }
        editPost.removeAttribute('class');
    }

    let addEditPost = function (post) {
        removeEditPost();
        var form = document.forms.editpost;
        form.setAttribute('class','post');

        var description = document.createElement('label');
        description.setAttribute('class','label');
        description.textContent = 'Description:';
        form.appendChild(description);

        form.appendChild(document.createElement('br'));

        var descriptionField = document.createElement('textarea');
        descriptionField.setAttribute('name','description');
        descriptionField.setAttribute('class','label');
        descriptionField.value = post.description;
        form.appendChild(descriptionField);

        form.appendChild(document.createElement('br'));

        var photoLink = document.createElement('label');
        photoLink.setAttribute('class','label');
        photoLink.textContent = 'PhotoLink:';
        form.appendChild(photoLink);

        form.appendChild(document.createElement('br'));

        var photoLinkField = document.createElement('input');
        photoLinkField.setAttribute('class','label');
        photoLinkField.setAttribute('name','photolink');
        photoLinkField.value = post.photoLink;
        form.appendChild(photoLinkField);

        form.appendChild(document.createElement('br'));

        var tags = document.createElement('label');
        tags.textContent = 'HashTags:';
        tags.setAttribute('class','label');
        form.appendChild(tags);

        form.appendChild(document.createElement('br'));

        var tagsField = document.createElement('input');
        tagsField.setAttribute('name','tags');
        tagsField.value = post.hashTags.join(' ');
        tagsField.setAttribute('class','label');
        form.appendChild(tagsField);

        form.appendChild(document.createElement('br'));

        var button = document.createElement('button');
        button.setAttribute('class','button');
        button.setAttribute('edit-post-id',post.id);
        button.textContent = 'Edit post';
        button.addEventListener('click',ModuleEvent.eventEditPost);

        form.appendChild(button);
    }

    let addAddPost = function () {
        removeAddPost();
        removeEditPost();

        var form = document.forms.addpost;
        form.setAttribute('class','post');

        var description = document.createElement('label');
        description.setAttribute('class','label');
        description.textContent = 'Description:            ';
        form.appendChild(description);

        form.appendChild(document.createElement('br'));

        var descriptionField = document.createElement('textarea');
        descriptionField.setAttribute('name','description');
        descriptionField.setAttribute('class','label');
        form.appendChild(descriptionField);

        form.appendChild(document.createElement('br'));

        var photoLink = document.createElement('label');
        photoLink.setAttribute('class','label');

        photoLink.textContent = 'PhotoLink:';
        form.appendChild(photoLink);

        form.appendChild(document.createElement('br'));

        var photoLinkField = document.createElement('input');
        photoLinkField.setAttribute('class','label');
        photoLinkField.setAttribute('name','photolink');
        form.appendChild(photoLinkField);

        form.appendChild(document.createElement('br'));

        var tags = document.createElement('label');
        tags.textContent = 'HashTags:';
        tags.setAttribute('class','label');
        form.appendChild(tags);

        form.appendChild(document.createElement('br'));

        var tagsField = document.createElement('input');
        tagsField.setAttribute('name','tags');
        tagsField.setAttribute('class','label');
        form.appendChild(tagsField);

        form.appendChild(document.createElement('br'));

        var button = document.createElement('button');
        button.setAttribute('class','button');
        button.textContent = 'Add post';
        button.addEventListener('click',ModuleEvent.eventAddPost);

        form.appendChild(button);
    }

    let addLoginField = function (){
        removeLoginField();
        var form = document.forms.signinfield;
        form.setAttribute('class','post');
        var login = document.createElement('label');
        login.setAttribute('class','label');
        login.textContent = 'Login';
        form.appendChild(login);

        form.appendChild(document.createElement('br'));

        var loginField = document.createElement('input');
        loginField.setAttribute('class','label');
        loginField.setAttribute('name','loginfield')
        form.appendChild(loginField);

        form.appendChild(document.createElement('br'));

        var password = document.createElement('label');
        password.setAttribute('class','label');
        password.textContent = 'Password';
        form.appendChild(password);

        form.appendChild(document.createElement('br'));

        var passwordField = document.createElement('input');
        passwordField.setAttribute('class','label');
        passwordField.setAttribute('name','passwordfield');
        passwordField.setAttribute('type','password');
        form.appendChild(passwordField);

        form.appendChild(document.createElement('br'));

        var button = document.createElement('button');
        button.setAttribute('class','button');
        button.textContent ='Log in';
        button.addEventListener('click',ModuleEvent.eventLogin);
        form.appendChild(button);
    }

    function getPhotoPost(post) {

        var photoPost = document.createElement('form');
        photoPost.setAttribute('class', 'post');
        photoPost.setAttribute('id', post.id);

        var author = document.createElement('div');
        author.setAttribute('class', 'author');
        author.textContent = post.author;
        photoPost.appendChild(author);

        if(userName === post.author){
            var img = document.createElement('img');
            img.setAttribute('class','delete');
            img.setAttribute('alt','delete.png');
            img.setAttribute('src','delete.png');
            img.setAttribute('post-id',post.id)
            img.addEventListener('click',ModuleEvent.eventRemovePhotoPost);
            photoPost.appendChild(img);

            var edit = document.createElement('img');
            edit.setAttribute('class','edit');
            edit.setAttribute('alt','edit.png');
            edit.setAttribute('edit-post-id',post.id);
            edit.setAttribute('src','edit.png');
            edit.addEventListener('click',ModuleEvent.eventNewEditPost)
            photoPost.appendChild(edit);
        }

        var time = document.createElement('div');
        time.setAttribute('class','time');
        time.textContent = post.createdAt.getDate() + " " + (post.createdAt.getMonth()+1) + " " + post.createdAt.toString().substring(10,21);
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
        numLike.setAttribute('class','num-like');
        numLike.setAttribute('id','numlike' + post.id.toString());
        if(post.likes){
            numLike.textContent = post.likes.length;
        }
        else{
            numLike.textContent = 0;
        }
        photoPost.appendChild(numLike);

        var like = document.createElement('img');
        like.setAttribute('id-like',post.id);
        like.setAttribute('class','like');
        if(post.likes && post.likes.includes(userName)){
            like.setAttribute('src', 'like.png');
        }
        else{
            like.setAttribute('src', 'unlike.png');
        }
        like.setAttribute('alt', 'like.png');
        like.addEventListener('click',ModuleEvent.eventLike);
        photoPost.appendChild(like);

        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));

        return photoPost;
    }

    let removePhotoPosts = function (){
        var posts = document.getElementById('posts');
        var length = posts.childNodes.length;
        for (var i =  length - 1; i > -1; i--) {
            posts.removeChild(posts.childNodes[i]);
        }
        var addButton = document.getElementsByClassName('add-button')[0];
        if(document.getElementById('add-posts') !== null){
            addButton.removeChild(document.getElementById('add-posts'));
        }
    }

    let showPhotoPosts = function (showPosts) {
        removePhotoPosts();
        removeLoginField();
        removeAddPost();
        removeEditPost();

        var addButton = document.getElementsByClassName('add-button')[0];
        var posts = document.getElementById('posts');
        showPosts.forEach(function (post) {
            posts.appendChild(getPhotoPost(post));
        });
        if(photoPosts.length === posts.childElementCount || showPosts.length<10){
           var div = document.createElement('div');
           div.textContent = 'Ops! Posts have ended!';
           div.setAttribute('class','add');
           div.setAttribute('id','add-posts');
           addButton.appendChild(div);
        }
        else{
            addButton.appendChild(getAddButon());
        }
    };

    let addPhotoPosts = function (addPosts) {
        var posts = document.getElementById('posts');
        addPosts.forEach(function (post) {
            posts.appendChild(getPhotoPost(post));
        });
        if(photoPosts.length === posts.childElementCount || addPosts.length<10){
            var div = document.createElement('div');
            div.textContent = 'Ops! Posts have ended!';
            div.setAttribute('class','add');
            div.setAttribute('id','add-posts');
            document.getElementsByClassName('add-button')[0].replaceChild(div,document.getElementById('add-posts'));
        }
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
        var person = document.getElementsByClassName('person')[0];
        var logo = document.getElementsByClassName('logo')[0];
        logo.addEventListener('click',ModuleEvent.eventMainPage);
        document.forms.search.img.addEventListener('click',ModuleEvent.eventSearchPosts);
        var length = person.childNodes.length;
        for (var i =  length - 1; i > -1; i--) {
            person.removeChild(person.childNodes[i]);
        }
        var user = document.createElement('div');
        user.setAttribute('id','username');
        user.setAttribute('class','username');
        person.appendChild(user);
        if (userName !== null){
            user.textContent = userName;
            var addPhotoPost = document.createElement('img');
            addPhotoPost.setAttribute('class','add-foto');
            addPhotoPost.setAttribute('alt','plus.png');
            addPhotoPost.setAttribute('src','plus.png');
            addPhotoPost.addEventListener('click',ModuleEvent.eventNewPost);
            person.appendChild(addPhotoPost);

            var exit = document.createElement('img');
            exit.setAttribute('class','add-foto');
            exit.setAttribute('alt','exit.png');
            exit.setAttribute('src','exit.png');
            exit.addEventListener('click',ModuleEvent.eventExit);
            person.appendChild(exit);
        }
        else{
            user.textContent = 'Sign in';
            user.addEventListener('click',ModuleEvent.eventSignIn);
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
        addPhotoPosts,
        removePhotoPosts,
        addLoginField,
        addAddPost,
        addEditPost
    };
})();

var ModuleEvent = (function (){
    let eventRemovePhotoPost = function () {
        removePhotoPost(this.getAttribute('post-id'));
    }

    let eventAddPhotoPosts = function(){
        addPhotoPosts();
    }

    let eventExit = function(){
        userName = null;
        sendUserNameinLocalStorage();
        eventMainPage();
    }

    let eventSignIn = function(){
        ModuleDOM.removePhotoPosts();
        ModuleDOM.addLoginField();
    }

    let eventLike = function(){
        var id = this.getAttribute('id-like');
        var post = photoPosts[functional.searchPhotoPost(id)];
        if(post.author !== userName && userName !== null){
            var numlike = document.getElementById('numlike'+post.id.toString());
            var i = post.likes.findIndex(function(like){
                return like === userName;
            });
            if(i !== -1){
                this.setAttribute('src','unlike.png');
                post.likes.splice(i);
            }
            else{
                post.likes.push(userName);
                this.setAttribute('src','like.png');
            }
            numlike.textContent = post.likes.length;
            sendPostsInLocalStorage();
        }
    }

    let eventMainPage = function(){
        document.forms.search.time.value='';
        document.forms.search.author.value='';
        document.forms.search.tags.value='';
        showUserName();
        showPhotoPosts();
    }

    let eventLogin = function () {
        var name = document.forms.signinfield.loginfield.value;
        var i = users.findIndex(function(user,i,users){
            if (user.name === name) return true;
            return false;
        });
        if(i !== -1){
            if(users[i].password === document.forms.signinfield.passwordfield.value){
                userName = name;
                sendUserNameinLocalStorage();
                eventMainPage();
            }
            else{
                ModuleDOM.addLoginField();
                var div = document.createElement('div');
                div.textContent = 'Error! Incorrect password!';
                div.setAttribute('class','label');
                document.forms.signinfield.appendChild(div);
            }
        }
        else{
            ModuleDOM.addLoginField();
            var div = document.createElement('div');
            div.setAttribute('class','label');
            div.textContent = 'Error! Such user does not exist!';
            document.forms.signinfield.appendChild(div);
        }
    }

    let eventSearchPosts = function (){
        showPhotoPosts();
    }

    let eventNewPost = function (){
        ModuleDOM.removePhotoPosts();
        ModuleDOM.addAddPost();
    }

    let eventNewEditPost = function(){
        ModuleDOM.removePhotoPosts();
        ModuleDOM.addEditPost(photoPosts[functional.searchPhotoPost(this.getAttribute('edit-post-id'))]);
    }

    let eventAddPost = function (){
        var post = {
            id: id.toString(),
            description: document.forms.addpost.description.value,
            createdAt: new Date(),
            author: userName,
            photoLink: document.forms.addpost.photolink.value,
            likes:[],
            hashTags: document.forms.addpost.tags.value.split(' ')
        }
        eventMainPage();
        if(addPhotoPost(post)){
            id++;
        }
        sendPostsInLocalStorage();
    }

    let eventEditPost = function(){
        var post = {
            description: document.forms.editpost.description.value,
            photoLink: document.forms.editpost.photolink.value,
            hashTags: document.forms.editpost.tags.value.split(' ')
        }
        eventMainPage();
        editPhotoPost(this.getAttribute('edit-post-id'),post);
        sendPostsInLocalStorage();
    }

    return{
        eventRemovePhotoPost,
        eventAddPhotoPosts,
        eventExit,
        eventSignIn,
        eventLike,
        eventMainPage,
        eventLogin,
        eventNewPost,
        eventAddPost,
        eventEditPost,
        eventNewEditPost,
        eventSearchPosts
    };
})();

function removePhotoPost(id) {
    if (functional.removePhotoPost(id)) {
        ModuleDOM.removePhotoPost(id);
        sendPostsInLocalStorage();
        return true;
    }
    return false;
}

function editPhotoPost(id, photoPost) {
    if (functional.editPhotoPost(id, photoPost)) {
        ModuleDOM.editPhotoPost(id, functional.getPhotoPost(id));
        sendPostsInLocalStorage();
        return true;
    }
     return false;
 }

function addPhotoPosts(){
    posts = document.getElementById("posts");
    if(document.forms.search.tags.value !== ''){
        var filterConfig ={
            author: document.forms.search.author.value,
            hashTags: document.forms.search.tags.value.split(' '),
            createdAt: document.forms.search.time.value
        }
    }
    else{
        var filterConfig ={
            author: document.forms.search.author.value,
            createdAt: document.forms.search.time.value
        }
    }
    ModuleDOM.addPhotoPosts(functional.getPhotoPosts(posts.childNodes.length, 10,filterConfig));
}

function addPhotoPost(photoPost) {
    if (functional.addPhotoPost(photoPost)) {
        ModuleDOM.showPhotoPost(photoPost);
        return true;
    }
    return false;
}

function showPhotoPosts() {
    receivePostsOfLocalStorage();
    if(document.forms.search.tags.value !== ''){
        var filterConfig ={
            author: document.forms.search.author.value,
            hashTags: document.forms.search.tags.value.split(' '),
            createdAt: document.forms.search.time.value
        }
    }
    else{
        var filterConfig ={
            author: document.forms.search.author.value,
            createdAt: document.forms.search.time.value
        }
    }
    ModuleDOM.showPhotoPosts(functional.getPhotoPosts(0, 10, filterConfig));
}

function showUserName() {
     receiveUserNameofLocalStorage();
     ModuleDOM.showUserName();
 }

function sendPostsInLocalStorage(){
    photoPosts.forEach(function(post){
       post.createdAt = post.createdAt.getTime();
    });
    localStorage.setItem('posts',JSON.stringify(photoPosts));
    localStorage.setItem('id',JSON.stringify(id));
    photoPosts.forEach(function(post){
        post.createdAt = new Date(post.createdAt);
    });
}

function receivePostsOfLocalStorage(){
    var posts = JSON.parse(localStorage.getItem('posts'));
    if(posts !== null){
        photoPosts = posts;
        id = JSON.parse(localStorage.getItem('id'));
    }
    photoPosts.forEach(function(post){
        post.createdAt = new Date(post.createdAt);
    });
}

function sendUserNameinLocalStorage(){
    localStorage.setItem('user',JSON.stringify(userName));
}

function receiveUserNameofLocalStorage(){
    var user = JSON.parse(localStorage.getItem('user'));
    if(user !== null){
        userName = user;
    }
}

showUserName();
showPhotoPosts();