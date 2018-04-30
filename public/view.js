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
