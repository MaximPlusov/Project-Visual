const ModuleEvent = (function () {
    const eventRemovePhotoPost = function () {
        removePhotoPost(this.getAttribute('post-id'));
    };
    const eventAddPhotoPosts = function () {
        addPhotoPosts();
    };
    const eventExit = function () {
        userName = null;
        sendUserNameinLocalStorage();
        eventMainPage();
    };
    const eventSignIn = function () {
        ModuleDOM.removePhotoPosts();
        ModuleDOM.addLoginField();
    };
    const eventLike = function () {
        const id = this.getAttribute('id-like');
        likePhotoPost(id);
    };

    let eventMainPage = function () {
        document.forms.search.time.value = '';
        document.forms.search.author.value = '';
        document.forms.search.tags.value = '';
        showUserName();
        showPhotoPosts();
    };

    const eventLogin = function () {
        const name = document.forms.signinfield.loginfield.value;
        const i = users.findIndex((user, i, users) => user.name === name);
        let div;
        if (i !== -1) {
            if (users[i].password === document.forms.signinfield.passwordfield.value) {
                userName = name;
                sendUserNameinLocalStorage();
                eventMainPage();
            } else {
                ModuleDOM.addLoginField();
                div = document.createElement('div');
                div.textContent = 'Error! Incorrect password!';
                div.setAttribute('class', 'label');
                document.forms.signinfield.appendChild(div);
            }
        } else {
            ModuleDOM.addLoginField();
            div = document.createElement('div');
            div.setAttribute('class', 'label');
            div.textContent = 'Error! Such user does not exist!';
            document.forms.signinfield.appendChild(div);
        }
    };

    const eventSearchPosts = function () {
        showPhotoPosts();
    };

    const eventNewPost = function () {
        ModuleDOM.removePhotoPosts();
        ModuleDOM.addAddPost();
    };

    const eventNewEditPost = function () {
        ModuleDOM.removePhotoPosts();
        getPhotoPost(this.getAttribute('edit-post-id'));
    };

    const eventAddPost = function () {
        getId();
    };

    const eventEditPost = function () {
        const post = {
            description: document.forms.editpost.description.value,
            photoLink: document.forms.editpost.photolink.value,
            hashTags: document.forms.editpost.tags.value.split(' '),
        };
        eventMainPage();
        editPhotoPost(this.getAttribute('edit-post-id'), post);
    };

    return {
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
        eventSearchPosts,
    };
}());

