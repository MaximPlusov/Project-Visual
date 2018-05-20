const ModuleDOM = (function () {
    function getAddButon() {
        const add = document.createElement('img');
        add.setAttribute('class', 'add-posts');
        add.setAttribute('alt', 'plus.png');
        add.setAttribute('src', 'plus.png');
        add.setAttribute('id', 'add-posts');
        add.addEventListener('click', ModuleEvent.eventAddPhotoPosts);
        return add;
    }

    function removeLoginField() {
        const signIn = document.forms.signinfield;
        const length = signIn.childNodes.length;
        for (let i = length - 1; i > -1; i--) {
            signIn.removeChild(signIn.childNodes[i]);
        }
        signIn.removeAttribute('class');
    }

    function removeAddPost() {
        const addPost = document.forms.addpost;
        const length = addPost.childNodes.length;
        for (let i = length - 1; i > -1; i--) {
            addPost.removeChild(addPost.childNodes[i]);
        }
        addPost.removeAttribute('class');
    }

    function removeEditPost() {
        const editPost = document.forms.editpost;
        const length = editPost.childNodes.length;
        for (let i = length - 1; i > -1; i--) {
            editPost.removeChild(editPost.childNodes[i]);
        }
        editPost.removeAttribute('class');
    }

    const likePhotoPost = function (flag, id) {
        const numlike = document.getElementById(`numlike${id.toString()}`);
        const imglike = document.getElementById(`imglike${id.toString()}`);
        if (flag === '1') {
            imglike.setAttribute('src', 'like.png');
            numlike.textContent = Number(numlike.textContent) + 1;
        } else if (flag === '2') {
            numlike.textContent = Number(numlike.textContent) - 1;
            imglike.setAttribute('src', 'unlike.png');
        }
    };

    const addEditPost = function (post) {
        removeEditPost();
        const form = document.forms.editpost;
        form.setAttribute('class', 'post');

        const description = document.createElement('label');
        description.setAttribute('class', 'label');
        description.textContent = 'Description:';
        form.appendChild(description);

        form.appendChild(document.createElement('br'));

        const descriptionField = document.createElement('textarea');
        descriptionField.setAttribute('name', 'description');
        descriptionField.setAttribute('class', 'label');
        descriptionField.value = post.description;
        form.appendChild(descriptionField);

        form.appendChild(document.createElement('br'));

        const photoLink = document.createElement('label');
        photoLink.setAttribute('class', 'label');
        photoLink.textContent = 'PhotoLink:';
        form.appendChild(photoLink);

        form.appendChild(document.createElement('br'));

        const photoLinkField = document.createElement('input');
        photoLinkField.setAttribute('class', 'label');
        photoLinkField.setAttribute('name', 'photolink');
        photoLinkField.value = post.photoLink;
        form.appendChild(photoLinkField);

        form.appendChild(document.createElement('br'));

        const tags = document.createElement('label');
        tags.textContent = 'HashTags:';
        tags.setAttribute('class', 'label');
        form.appendChild(tags);

        form.appendChild(document.createElement('br'));

        const tagsField = document.createElement('input');
        tagsField.setAttribute('name', 'tags');
        tagsField.value = post.hashTags.join(' ');
        tagsField.setAttribute('class', 'label');
        form.appendChild(tagsField);

        form.appendChild(document.createElement('br'));

        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.setAttribute('edit-post-id', post.id);
        button.textContent = 'Edit post';
        button.addEventListener('click', ModuleEvent.eventEditPost);

        form.appendChild(button);
    };

    const addAddPost = function () {
        removeAddPost();
        removeEditPost();

        const form = document.forms.addpost;
        form.setAttribute('class', 'post');

        const description = document.createElement('label');
        description.setAttribute('class', 'label');
        description.textContent = 'Description:            ';
        form.appendChild(description);

        form.appendChild(document.createElement('br'));

        const descriptionField = document.createElement('textarea');
        descriptionField.setAttribute('name', 'description');
        descriptionField.setAttribute('class', 'label');
        form.appendChild(descriptionField);

        form.appendChild(document.createElement('br'));

        const photoLink = document.createElement('label');
        photoLink.setAttribute('class', 'label');

        photoLink.textContent = 'PhotoLink:';
        form.appendChild(photoLink);

        form.appendChild(document.createElement('br'));

        const photoLinkField = document.createElement('input');
        photoLinkField.setAttribute('class', 'label');
        photoLinkField.setAttribute('name', 'photolink');
        form.appendChild(photoLinkField);

        form.appendChild(document.createElement('br'));

        const tags = document.createElement('label');
        tags.textContent = 'HashTags:';
        tags.setAttribute('class', 'label');
        form.appendChild(tags);

        form.appendChild(document.createElement('br'));

        const tagsField = document.createElement('input');
        tagsField.setAttribute('name', 'tags');
        tagsField.setAttribute('class', 'label');
        form.appendChild(tagsField);

        form.appendChild(document.createElement('br'));

        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.textContent = 'Add post';
        button.addEventListener('click', ModuleEvent.eventAddPost);

        form.appendChild(button);
    };

    const addLoginField = function () {
        removeLoginField();
        const form = document.forms.signinfield;
        form.setAttribute('class', 'post');
        const login = document.createElement('label');
        login.setAttribute('class', 'label');
        login.textContent = 'Login';
        form.appendChild(login);

        form.appendChild(document.createElement('br'));

        const loginField = document.createElement('input');
        loginField.setAttribute('class', 'label');
        loginField.setAttribute('name', 'loginfield');
        form.appendChild(loginField);

        form.appendChild(document.createElement('br'));

        const password = document.createElement('label');
        password.setAttribute('class', 'label');
        password.textContent = 'Password';
        form.appendChild(password);

        form.appendChild(document.createElement('br'));

        const passwordField = document.createElement('input');
        passwordField.setAttribute('class', 'label');
        passwordField.setAttribute('name', 'passwordfield');
        passwordField.setAttribute('type', 'password');
        form.appendChild(passwordField);

        form.appendChild(document.createElement('br'));

        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.textContent = 'Log in';
        button.addEventListener('click', ModuleEvent.eventLogin);
        form.appendChild(button);
    };

    function getPhotoPost(post) {
        const photoPost = document.createElement('form');
        photoPost.setAttribute('class', 'post');
        photoPost.setAttribute('id', post.id);

        const author = document.createElement('div');
        author.setAttribute('class', 'author');
        author.textContent = post.author;
        photoPost.appendChild(author);

        if (userName === post.author) {
            const img = document.createElement('img');
            img.setAttribute('class', 'delete');
            img.setAttribute('alt', 'delete.png');
            img.setAttribute('src', 'delete.png');
            img.setAttribute('post-id', post.id);
            img.addEventListener('click', ModuleEvent.eventRemovePhotoPost);
            photoPost.appendChild(img);

            const edit = document.createElement('img');
            edit.setAttribute('class', 'edit');
            edit.setAttribute('alt', 'edit.png');
            edit.setAttribute('edit-post-id', post.id);
            edit.setAttribute('src', 'edit.png');
            edit.addEventListener('click', ModuleEvent.eventNewEditPost);
            photoPost.appendChild(edit);
        }

        const time = document.createElement('div');
        time.setAttribute('class', 'time');
        time.textContent = `${post.createdAt.getDate()} ${post.createdAt.getMonth() + 1} ${post.createdAt.toString().substring(10, 21)}`;
        photoPost.appendChild(time);

        const img = document.createElement('img');
        img.setAttribute('class', 'img');
        img.setAttribute('src', post.photoLink);
        img.setAttribute('alt', 'foto.png');
        photoPost.appendChild(img);

        const description = document.createElement('div');
        description.setAttribute('class', 'text');
        description.textContent = post.description;
        photoPost.appendChild(description);

        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));

        if (post.hashTags) {
            for (let i = 0; i < post.hashTags.length; i++) {
                const tag = document.createElement('div');
                tag.setAttribute('class', 'tag');
                tag.textContent = post.hashTags[i];
                photoPost.appendChild(tag);
            }
        }

        const numLike = document.createElement('div');
        numLike.setAttribute('class', 'num-like');
        numLike.setAttribute('id', `numlike${post.id.toString()}`);
        if (post.likes) {
            numLike.textContent = post.likes.length;
        } else {
            numLike.textContent = 0;
        }
        photoPost.appendChild(numLike);

        const like = document.createElement('img');
        like.setAttribute('id-like', post.id);
        like.setAttribute('id', `imglike${post.id.toString()}`);
        like.setAttribute('class', 'like');
        if (post.likes && post.likes.includes(userName)) {
            like.setAttribute('src', 'like.png');
        } else {
            like.setAttribute('src', 'unlike.png');
        }
        like.setAttribute('alt', 'like.png');
        like.addEventListener('click', ModuleEvent.eventLike);
        photoPost.appendChild(like);

        photoPost.appendChild(document.createElement('br'));
        photoPost.appendChild(document.createElement('br'));

        return photoPost;
    }

    const removePhotoPosts = function () {
        const posts = document.getElementById('posts');
        const length = posts.childNodes.length;
        for (let i = length - 1; i > -1; i--) {
            posts.removeChild(posts.childNodes[i]);
        }
        const addButton = document.getElementsByClassName('add-button')[0];
        if (document.getElementById('add-posts') !== null) {
            addButton.removeChild(document.getElementById('add-posts'));
        }
    };

    const showPhotoPosts = function (showPosts) {
        removePhotoPosts();
        removeLoginField();
        removeAddPost();
        removeEditPost();

        const addButton = document.getElementsByClassName('add-button')[0];
        const posts = document.getElementById('posts');
        showPosts.forEach((post) => {
            posts.appendChild(getPhotoPost(post));
        });
        if (showPosts.length < 10) {
            const div = document.createElement('div');
            div.textContent = 'Ops! Posts have ended!';
            div.setAttribute('class', 'add');
            div.setAttribute('id', 'add-posts');
            addButton.appendChild(div);
        } else {
            addButton.appendChild(getAddButon());
        }
    };

    const addPhotoPosts = function (addPosts) {
        const posts = document.getElementById('posts');
        addPosts.forEach((post) => {
            posts.appendChild(getPhotoPost(post));
        });
        if (addPosts.length < 10) {
            const div = document.createElement('div');
            div.textContent = 'Ops! Posts have ended!';
            div.setAttribute('class', 'add');
            div.setAttribute('id', 'add-posts');
            document.getElementsByClassName('add-button')[0].replaceChild(div, document.getElementById('add-posts'));
        }
    };

    const removePhotoPost = function (id) {
        const posts = document.getElementById('posts');
        const childArray = Array.prototype.slice.call(posts.childNodes);
        const removePost = childArray.find(item => item.id === id);
        if (removePost) {
            posts.removeChild(removePost);
        }
    };

    const editPhotoPost = function (id, photoPost) {
        const posts = document.getElementById('posts');
        const childArray = Array.prototype.slice.call(posts.childNodes);
        const editPost = childArray.find(item => item.id === id);
        posts.replaceChild(getPhotoPost(photoPost), editPost);
    };

    const showUserName = function () {
        const person = document.getElementsByClassName('person')[0];
        const logo = document.getElementsByClassName('logo')[0];
        logo.addEventListener('click', ModuleEvent.eventMainPage);
        document.forms.search.img.addEventListener('click', ModuleEvent.eventSearchPosts);
        const length = person.childNodes.length;
        for (let i = length - 1; i > -1; i--) {
            person.removeChild(person.childNodes[i]);
        }
        const user = document.createElement('div');
        user.setAttribute('id', 'username');
        user.setAttribute('class', 'username');
        person.appendChild(user);
        if (userName !== null) {
            user.textContent = userName;
            const addPhotoPost = document.createElement('img');
            addPhotoPost.setAttribute('class', 'add-foto');
            addPhotoPost.setAttribute('alt', 'plus.png');
            addPhotoPost.setAttribute('src', 'plus.png');
            addPhotoPost.addEventListener('click', ModuleEvent.eventNewPost);
            person.appendChild(addPhotoPost);

            const exit = document.createElement('img');
            exit.setAttribute('class', 'add-foto');
            exit.setAttribute('alt', 'exit.png');
            exit.setAttribute('src', 'exit.png');
            exit.addEventListener('click', ModuleEvent.eventExit);
            person.appendChild(exit);
        } else {
            user.textContent = 'Sign in';
            user.addEventListener('click', ModuleEvent.eventSignIn);
        }
    };

    const showPhotoPost = function (photoPost) {
        const posts = document.getElementById('posts');
        posts.insertBefore(getPhotoPost(photoPost), posts.firstElementChild);
    };

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
        addEditPost,
        likePhotoPost,
    };
}());
