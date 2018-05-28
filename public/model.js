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
];

let userName = null;
//  let id = 21;

function likePhotoPostPromise(id) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `/likePhotoPost?id=${id}&user=${userName}`, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    }));
}

function likePhotoPost(id) {
    likePhotoPostPromise(id)
        .then((response) => {
            ModuleDOM.likePhotoPost(response, id);
        });
}

function getPhotoPostPromise(id) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/getPhotoPost?id=${id}`, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    }));
}

function getPhotoPost(id) {
    getPhotoPostPromise(id)
        .then((response) => {
            ModuleDOM.addEditPost(JSON.parse(response));
        });
}

function getIdPromise() {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/getId', true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    }));
}

function getId() {
    getIdPromise()
        .then((response) => {
            const post = {
                id: response,
                description: document.forms.addpost.description.value,
                createdAt: new Date(),
                author: userName,
                photoLink: document.forms.addpost.photolink.value,
                likes: [],
                hashTags: document.forms.addpost.tags.value.split(' '),
            };
            ModuleEvent.eventMainPage();
            addPhotoPost(post);
    });
}

function removePhotoPostPromise(id) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `/removePhotoPost?id=${id}`, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    }));
}

function removePhotoPost(id) {
    removePhotoPostPromise(id)
        .then((response) => {
            ModuleDOM.removePhotoPost(id);
            return true;
        });
    return false;
}

function editPhotoPostPromise(id, photoPost) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `/editPhotoPost/?id=${id}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send(JSON.stringify(photoPost));
    }));
}

function editPhotoPost(id, photoPost) {
    editPhotoPostPromise(id, photoPost)
        .then((response) => {
            ModuleDOM.editPhotoPost(id, functional.getPhotoPost(id));
            return true;
        });
    return false;
}

function addPhotoPostsPromise(filterConfig) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/getPhotoPosts/?skip='+ posts.childNodes.length + '&top=' + '10', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(filterConfig));
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            }
        };
    }));
}

function addPhotoPosts() {
    posts = document.getElementById('posts');
    let filterConfig;
    if (document.forms.search.tags.value !== '') {
        filterConfig = {
            author: document.forms.search.author.value,
            hashTags: document.forms.search.tags.value.split(' '),
            createdAt: document.forms.search.time.value,
        };
    } else {
        filterConfig = {
            author: document.forms.search.author.value,
            createdAt: document.forms.search.time.value,
        };
    }
    addPhotoPostsPromise(filterConfig)
        .then((resolve) => {
            const posts = JSON.parse(resolve);
            posts.forEach((post) => {
                post.createdAt = new Date(post.createdAt);
            });
            ModuleDOM.addPhotoPosts(posts);
            return true;
        });
    return false;
}

function addPhotoPostPromise(photoPost) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/addPhotoPost/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send(JSON.stringify(photoPost));
    }));
}

function addPhotoPost(photoPost) {
    addPhotoPostPromise(photoPost)
        .then((response) => {
            id++;
            sendIdinLocalStorage();
            ModuleDOM.showPhotoPost(photoPost);
            return true;
        });
}

function showPhotoPostsPromise(filterConfig) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `/getPhotoPosts/?skip=${0}&top=${10}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send(JSON.stringify(filterConfig));
    }));
}

function showPhotoPosts() {
    let filterConfig;
    if (document.forms.search.tags.value !== '') {
        filterConfig = {
            author: document.forms.search.author.value,
            hashTags: document.forms.search.tags.value.split(' '),
            createdAt: document.forms.search.time.value,
        };
    } else {
        filterConfig = {
            author: document.forms.search.author.value,
            createdAt: document.forms.search.time.value,
        };
    }
    showPhotoPostsPromise(filterConfig)
        .then((response) => {
            const posts = JSON.parse(response);
            posts.forEach((post) => {
                post.createdAt = new Date(post.createdAt);
            });
            ModuleDOM.showPhotoPosts(posts);
            return true;
        });
    return false;
}

function loginPromise(name, password) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            else{
                alert("Неверное имя пользователя или пароль");
                ModuleDOM.addLoginField();
            }
        };
        let user = JSON.stringify({"username":name,"password":password});
        xhr.send(user);
    }));
}

function login(name, password){
    loginPromise(name, password)
        .then((response) => {
            userName = name;
            sendUserNameinLocalStorage();
            eventMainPage();
    });

}



function showUserName() {
    receiveUserNameofLocalStorage();
    ModuleDOM.showUserName();
}

function sendUserNameinLocalStorage() {
    localStorage.setItem('user', JSON.stringify(userName));
}

function receiveUserNameofLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
        userName = user;
    }
}



showUserName();
showPhotoPosts();

