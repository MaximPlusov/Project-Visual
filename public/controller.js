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
        const password = document.forms.signinfield.passwordfield.value;
        login(name,password);
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

