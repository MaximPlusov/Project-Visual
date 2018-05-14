
// let photoPosts = [
//     {
//         id: '1',
//         description: 'My 1 trip!',
//         createdAt: new Date('2018-04-01T01:00:00'),
//         author: 'Maxim Plusov',
//         photoLink: '1.jpg',
//         hashTags:['perfect','best'],
//         likes:['Maxim Plusov']
//     },
//     {
//         id: '2',
//         description: 'My 2 trip!',
//         createdAt: new Date('2018-04-01T02:00:00'),
//         author: 'Maxim Plusov',
//         photoLink: '1.jpg',
//         hashTags:['perfect','best'],
//         likes:['Maxim Plusov']
//     },
//     {
//         id: '3',
//         description: 'My 3 trip!',
//         createdAt: new Date('2018-04-01T03:00:00'),
//         author: 'Maxim Plusov',
//         photoLink: '1.jpg',
//         hashTags:['perfect','best'],
//         likes:['Maxim Plusov']
//     },
//     {
//         id: '4',
//         description: 'My 4 trip!',
//         createdAt: new Date('2018-04-01T04:00:00'),
//         author: 'MaximPlusov',
//         photoLink: '1.jpg',
//         hashTags:['perfect','best'],
//         likes:['Maxim Plusov']
//     },
//     {
//         id: '5',
//         description: 'My 5 trip!',
//         createdAt: new Date('2018-04-01T05:00:00'),
//         author: 'Maxim Plusov',
//         photoLink: '1.jpg',
//         likes:[]
//     },
//     {
//         id: '6',
//         description: 'My 6 trip!',
//         createdAt: new Date('2018-04-01T06:00:00'),
//         author: 'MaximPlusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '7',
//         description: 'My 7 trip!',
//         createdAt: new Date('2018-04-01T07:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '8',
//         description: 'My 8 trip!',
//         createdAt: new Date('2018-04-01T08:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '9',
//         description: 'My 9 trip!',
//         createdAt: new Date('2018-04-01T09:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '10',
//         description: 'My 10 trip!',
//         createdAt: new Date('2018-04-01T10:00:00'),
//         author: 'Maxim Plusov',
//         photoLink: '1.jpg',
//         hashTags:['perfect','best'],
//         likes:['Maxim Plusov']
//     },
//     {
//         id: '11',
//         description: 'My 11 trip!',
//         createdAt: new Date('2018-04-01T11:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '12',
//         description: 'My 12 trip!',
//         createdAt: new Date('2018-04-01T12:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '13',
//         description: 'My 13 trip!',
//         createdAt: new Date('2018-04-01T13:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//
//     },
//     {
//         id: '14',
//         description: 'My 14 trip!',
//         createdAt: new Date('2018-04-01T14:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '15',
//         description: 'My 15 trip!',
//         createdAt: new Date('2018-04-01T15:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//
//     },
//     {
//         id: '16',
//         description: 'My 16 trip!',
//         createdAt: new Date('2018-04-01T16:00:00'),
//         author: 'Denis Belov',
//         photoLink: '1.jpg',
//         likes:[],
//         hashTags:['perfect','day']
//
//     },
//     {
//         id: '17',
//         description: 'My 17 trip!',
//         createdAt: new Date('2018-04-01T17:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '18',
//         description: 'My 18 trip!',
//         createdAt: new Date('2018-04-01T18:00:00'),
//         author: 'Maxim Rachok',
//         photoLink: '1.jpg',
//         likes:[],
//         hashTags:['life','best']
//     },
//     {
//         id: '19',
//         description: 'My 19 trip!',
//         createdAt: new Date('2018-04-01T19:00:00'),
//         author: 'Maxim Plusov',
//         likes:[],
//         photoLink: '1.jpg'
//     },
//     {
//         id: '20',
//         description: 'My 20 trip!',
//         createdAt: new Date('2018-04-01T20:00:00'),
//         author: 'Maxim Plusov',
//         photoLink: '1.jpg',
//         likes:['Maxim Plusov']
//     }
// ]
const users = [
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
// var functional = (function () {
//
//     let searchPhotoPost = function(id) {
//         if(typeof id !== 'string' ){
//             return false;
//         }
//         return photoPosts.findIndex(function(photoPost,i,photoPosts){
//             return photoPost.id === id;
//         });
//     }
//     function comparator(a,b){
//         return b.createdAt - a.createdAt;
//     }
//
//     let removePhotoPost = function(id){
//         if(typeof id !== 'string' ){
//             return false;
//         }
//         var i = searchPhotoPost(id);
//         if(i !== -1){
//             photoPosts.splice(i,1);
//             return true;
//         }
//         return false;
//     }
//     let getPhotoPost = function(id){
//         if(typeof id !== 'string' ){
//             return null;
//         }
//         var i = searchPhotoPost(id);
//         if(i !== -1){
//             return photoPosts[i];
//         }
//         return null;
//     }
//     let getPhotoPosts = function(skip, top, filterConfig){
//         skip = skip || 0;
//         top = top || 10;
//         filterConfig = filterConfig || undefined;
//         if(typeof skip !== 'number' ){
//             return null;
//         }
//         if(typeof top !== 'number'){
//             return null;
//         }
//         if(filterConfig){
//             var filterPhotoPosts = photoPosts.filter(function(photoPost){
//                 if(filterConfig.author){
//                     if (photoPost.author.indexOf(filterConfig.author) === -1){
//                         return false;
//                     }
//                 }
//                 if(filterConfig.createdAt){
//                     filterConfig.createdAt = new Date(filterConfig.createdAt);
//                     if(photoPost.createdAt.getFullYear() !== filterConfig.createdAt.getFullYear()
//                         || photoPost.createdAt.getMonth() !== filterConfig.createdAt.getMonth()
//                         || photoPost.createdAt.getDate() !== filterConfig.createdAt.getDate()){
//                         return false;
//                     }
//                 }
//                 if(filterConfig.hashTags && photoPost.hashTags){
//                     if(!filterConfig.hashTags.every(function (tag) {
//                             return photoPost.hashTags.includes(tag);
//                         })){
//                         return false;
//                     }
//                 }
//                 if(filterConfig.hashTags && !photoPost.hashTags){
//                     return false;
//                 }
//                 return true;
//             });
//             filterPhotoPosts.sort(comparator);
//             return filterPhotoPosts.slice(skip,top+skip);
//         }
//         photoPosts.sort(comparator);
//         return photoPosts.slice(skip,top+skip);
//     }
//     let validatePhotoPost = function(photoPost){
//         if(typeof  photoPost !== 'object'){
//             return false;
//         }
//         var val = {
//             id: function(){return typeof photoPost.id !== 'string'},
//             description: function(){ return typeof photoPost.description !== 'string' || photoPost.description.length >= 200},
//             createdAt: function(){ return typeof photoPost.createdAt !== 'object'},
//             author: function(){ return typeof photoPost.author !== 'string' || photoPost.author.length === 0},
//             photoLink: function(){return typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0},
//             hashTags:  function(){if(photoPost.hashTags){
//                 if(typeof photoPost.hashTags === 'string' ){
//                     photoPost.hashTags = photoPost.hashTags.split(" ");
//                 }
//                 return photoPost.hashTags.some(function (tag) {return typeof tag !== 'string';});
//             }},
//             likes: function(){if(photoPost.likes !== undefined ) {
//                 return photoPost.likes.some(function (like)  {return typeof like !== 'string';});}}
//         }
//         for (var key in val){
//             if(val[key]() === true){
//                 return false;
//             }
//         }
//         return true;
//     }
//     let addPhotoPost = function(photoPost){
//         if(typeof  photoPost !== 'object'){
//             return false;
//         }
//         if(validatePhotoPost(photoPost)){
//             photoPosts.push(photoPost);
//             return true;
//         }
//         return false;
//     }
//     let editPhotoPost= function(id, photoPost) {
//         if(typeof id !== 'string' ){
//             return false;
//         }
//         if(typeof  photoPost !== 'object') {
//             return false;
//         }
//         var i = searchPhotoPost(id);
//         if(i !== -1){
//             if(typeof photoPost.description === 'string'){
//                 photoPosts[i].description = photoPost.description;
//             }
//             if(typeof photoPost.photoLink === 'string'){
//                 photoPosts[i].photoLink = photoPost.photoLink;
//             }
//             if(photoPost.hashTags){
//                 photoPosts[i].hashTags = [];
//                 photoPost.hashTags.forEach(function(tag){
//                     if(typeof tag === 'string'){
//                         photoPosts[i].hashTags.push(tag);
//                     }
//                 });
//             }
//             return true;
//         }
//         return false;
//     }
//     return {
//         searchPhotoPost,
//         getPhotoPosts,
//         getPhotoPost,
//         validatePhotoPost,
//         addPhotoPost,
//         editPhotoPost,
//         removePhotoPost
//     };
//
// })();

let userName = null;
let id = 21;

function likePhotoPostPromise(id) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', '/likePhotoPost?id=' + id +'&user=' + userName, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    });
}

function likePhotoPost(id) {
    likePhotoPostPromise(id)
        .then(response => {
            ModuleDOM.likePhotoPost(response,id);
        });
}
function getPhotoPostPromise(id) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/getPhotoPost?id=' + id, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    });
}



function getPhotoPost(id) {
    getPhotoPostPromise(id)
        .then(response => {
            ModuleDOM.addEditPost(JSON.parse(response));
        });
}
function removePhotoPostPromise(id) {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/removePhotoPost?id=' + id, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    });
}

function removePhotoPost(id) {
    removePhotoPostPromise(id)
        .then(response => {
            ModuleDOM.removePhotoPost(id);
            return true;
        }
    );
    return false;
}

function editPhotoPostPromise(id, photoPost) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', '/editPhotoPost/?id=' + id, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(photoPost));
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
    });
}

function editPhotoPost(id, photoPost) {
    editPhotoPostPromise(id, photoPost)
        .then(response => {
            //readPostsJSON();
            ModuleDOM.editPhotoPost(id, functional.getPhotoPost(id));
            return true;
        });
    return false;
}

function addPhotoPostsPromise(filterConfig) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/getPhotoPosts/?skip=' + posts.childNodes.length + '&top='+ 10,true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(filterConfig));
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    });
}

function addPhotoPosts() {
    posts = document.getElementById("posts");
    var filterConfig;
    if(document.forms.search.tags.value !== ''){
        filterConfig = {
            author: document.forms.search.author.value,
            hashTags: document.forms.search.tags.value.split(' '),
            createdAt: document.forms.search.time.value
        }
    }
    else {
        filterConfig = {
            author: document.forms.search.author.value,
            createdAt: document.forms.search.time.value
        }
    }
    addPhotoPostsPromise(filterConfig)
        .then(resolve => {
            var posts = JSON.parse(resolve);
            posts.forEach(function(post) {
                post.createdAt = new Date(post.createdAt);
            });
            ModuleDOM.addPhotoPosts(posts);
            return true;
        });
    return false;
}

function addPhotoPostPromise(photoPost) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/addPhotoPost/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            else{
                resolve(error);
            }
        }
        xhr.send(JSON.stringify (photoPost));
    });
}

function addPhotoPost(photoPost){
    addPhotoPostPromise(photoPost)
        .then(response => {
            id++;
            sendIdinLocalStorage();
            ModuleDOM.showPhotoPost(photoPost);
            return true;
        });
}

function showPhotoPostsPromise(filterConfig) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/getPhotoPosts/?skip=' + 0 + '&top=' + 10, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send(JSON.stringify(filterConfig));
    });
}

function showPhotoPosts() {
    var filterConfig;
    if (document.forms.search.tags.value !== '') {
        filterConfig = {
            author: document.forms.search.author.value,
            hashTags: document.forms.search.tags.value.split(' '),
            createdAt: document.forms.search.time.value
        }
    }
    else {
        filterConfig = {
            author: document.forms.search.author.value,
            createdAt: document.forms.search.time.value
        }
    }
    showPhotoPostsPromise(filterConfig)
        .then(response => {
            let posts = JSON.parse(response);
            posts.forEach(function(post) {
                post.createdAt = new Date(post.createdAt);
            });
            ModuleDOM.showPhotoPosts(posts);
            return true;
        });
    return false;
}

function showUserName() {
    receiveUserNameofLocalStorage();
    ModuleDOM.showUserName();
}

function sendUserNameinLocalStorage() {
    localStorage.setItem('user', JSON.stringify(userName));
}

function sendIdinLocalStorage() {
    var i = JSON.parse(localStorage.getItem('id'));
    if (i === null) {
        localStorage.setItem('id', JSON.stringify(id));
    }
}

function receiveIdofLocalStorage() {
    var i = JSON.parse(localStorage.getItem('id'));
    if (i !== null) {
        id = i;
    }
}

function receiveUserNameofLocalStorage() {
    var user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
        userName = user;
    }
}

//sendIdinLocalStorage();
receiveIdofLocalStorage();
showUserName();
showPhotoPosts();
