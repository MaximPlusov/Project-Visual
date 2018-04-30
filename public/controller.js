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

