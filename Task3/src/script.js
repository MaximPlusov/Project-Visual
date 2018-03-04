;(function () {
    var photoPosts = [
        {
            id: '1',
            descriprion: 'My 1 trip!',
            createdAt: new Date('2018-03-04T01:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://1.jpg',
            hashTags:['perfect','best'],
            likes:['Maxim Plusov']
        },
        {
            id: '2',
            descriprion: 'My 2 trip!',
            createdAt: new Date('2018-03-04T02:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://2.jpg',
            hashTags:['perfect','best'],
            likes:['Maxim Plusov']
        },
        {
            id: '3',
            descriprion: 'My 3 trip!',
            createdAt: new Date('2018-03-04T03:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://3.jpg',
            hashTags:['perfect','best'],
            likes:['Maxim Plusov']
        },
        {
            id: '4',
            descriprion: 'My 4 trip!',
            createdAt: new Date('2008-03-04T04:00:00'),
            author: 'MaximPlusov',
            photoLink: 'http://4.jpg',
            hashTags:['perfect','best'],
            likes:['Maxim Plusov']
        },
        {
            id: '5',
            descriprion: 'My 5 trip!',
            createdAt: new Date('2018-03-04T05:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://5.jpg'
        },
        {
            id: '6',
            descriprion: 'My 6 trip!',
            createdAt: new Date('2018-03-04T06:00:00'),
            author: 'MaximPlusov',
            photoLink: 'http://6.jpg'
        },
        {
            id: '7',
            descriprion: 'My 7 trip!',
            createdAt: new Date('2018-03-04T07:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://7.jpg'
        },
        {
            id: '8',
            descriprion: 'My 8 trip!',
            createdAt: new Date('2018-03-05T08:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://8.jpg'
        },
        {
            id: '9',
            descriprion: 'My 9 trip!',
            createdAt: new Date('2018-03-04T09:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://9.jpg'
        },
        {
            id: '10',
            descriprion: 'My 10 trip!',
            createdAt: new Date('2018-03-04T10:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://10.jpg',
            hashTags:['perfect','best'],
            likes:['Maxim Plusov']
        },
        {
            id: '11',
            descriprion: 'My 11 trip!',
            createdAt: new Date('2018-03-04T11:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://11.jpg'
        },
        {
            id: '12',
            descriprion: 'My 12 trip!',
            createdAt: new Date('2018-03-04T12:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://12.jpg'
        },
        {
            id: '13',
            descriprion: 'My 13 trip!',
            createdAt: new Date('2018-03-04T13:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://13.jpg'
        },
        {
            id: '14',
            descriprion: 'My 14 trip!',
            createdAt: new Date('2018-03-04T14:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://14.jpg'
        },
        {
            id: '15',
            descriprion: 'My 15 trip!',
            createdAt: new Date('2018-03-04T15:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://15.jpg'
        },
        {
            id: '16',
            descriprion: 'My 16 trip!',
            createdAt: new Date('2018-03-04T16:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://16.jpg',
            hashTags:['perfect','day'],
        },
        {
            id: '17',
            descriprion: 'My 17 trip!',
            createdAt: new Date('2018-03-04T17:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://17.jpg'
        },
        {
            id: '18',
            descriprion: 'My 18 trip!',
            createdAt: new Date('2018-03-04T18:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://18.jpg',
            hashTags:['life','best'],
        },
        {
            id: '19',
            descriprion: 'My 19 trip!',
            createdAt: new Date('2018-03-04T19:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://19.jpg'
        },
        {
            id: '20',
            descriprion: 'My 20 trip!',
            createdAt: new Date('2018-03-04T20:00:00'),
            author: 'Maxim Plusov',
            photoLink: 'http://20.jpg'
        }
    ];
    function searchPhotoPost(id) {
        if(typeof id!='string' ){
            return false;
        }
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === id) return i;
        }
        return -1;
    }
    function removePhotoPost(id){
        if(typeof id!='string' ){
            return false;
        }
        var i = searchPhotoPost(id);
        if(i!=-1){
            photoPosts.splice(i,1);
            return true;
        }
        return false;
    }
    function getPhotoPost(id){
        if(typeof id!='string' ){
            return null;
        }
        var i = searchPhotoPost(id);
        if(i!=-1){
            return photoPosts[i];
        }
        return null;
    }
    function getPhotoPosts(skip, top, filterConfig){
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || null;
        if(typeof skip != "number" ){
            return NaN;
        }
        if(typeof top !="number"){
            return NaN;
        }
        if(filterConfig != null){
            var filterPhotoPosts = photoPosts.filter(function(photoPost){
                if(filterConfig.author != null && filterConfig.createdAt != null){
                    return photoPost.author == filterConfig.author && photoPost.createdAt.getFullYear() == filterConfig.createdAt.getFullYear() && photoPost.createdAt.getMonth() == filterConfig.createdAt.getMonth() &&photoPost.createdAt.getDate() == filterConfig.createdAt.getDate();
                }
                if(filterConfig.author != null){
                    return photoPost.author == filterConfig.author;
                }
                if(filterConfig.createdAt != null){
                    return photoPost.createdAt.getFullYear() == filterConfig.createdAt.getFullYear() && photoPost.createdAt.getMonth() == filterConfig.createdAt.getMonth() &&photoPost.createdAt.getDate() == filterConfig.createdAt.getDate();
                }
                if(filterConfig.hashTags != null && photoPost.hashTags != null){
                    for(var i = 0;i<filterConfig.hashTags.length;i++){
                        if(photoPost.hashTags.some(function (t) {
                            return t === filterConfig.hashTags[i]
                        })){
                            return true;
                        }
                    }
                }
            });
            filterPhotoPosts.sort(function(a,b){
                return a.createdAt - b.createdAt;
            });
            return filterPhotoPosts.slice(skip,top+skip);
        }
        photoPosts.sort(function(a,b){
            return a.createdAt - b.createdAt;
        });
        return photoPosts.slice(skip,top+skip);
    }
    function validatePhotoPost(photoPost){
        if(typeof  photoPost != 'object'){
            return false;
        }
        if(typeof photoPost.id!='string'){
            return false;
        }
        if(typeof photoPost.descriprion!='string'){
            return false;
        }
        if(photoPost.descriprion.length >= 200){
            return false;
        }
        if(typeof photoPost.createdAt!='object'){
            return false;
        }
        if(typeof photoPost.author!='string'){
            return false;
        }
        if(photoPost.author.length == 0){
            return false;
        }
        if(typeof photoPost.photoLink!='string'){
            return false;
        }
        if(photoPost.photoLink.length == 0){
            return false;
        }
        if(photoPost.hashTags != null){
            for(var i = 0; i<photoPost.hashTags.length;i++){
                if(typeof photoPost.hashTags[i] != 'string'){
                    return false;
                }
            }
        }
        if(photoPost.likes != null){
            for(var i = 0; i<photoPost.likes.length;i++){
                if(typeof photoPost.likes[i] != 'string'){
                    return false;
                }
            }
        }
        return true;
    }
    function addPhotoPost(photoPost){
        if(typeof  photoPost != 'object'){
            return false;
        }
        if(validatePhotoPost(photoPost)){
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }
    function editPhotoPost(id, photoPost) {
        if(typeof id!='string' ){
            return false;
        }
        if(typeof  photoPost != 'object'){
            return false;
        }
        var i = searchPhotoPost(id);
        if(i!=-1){
            if(typeof photoPost.description == 'string'){
                photoPosts[i].descriprion = photoPost.description;
            }
            if(typeof photoPost.photoLink == 'string'){
                photoPosts[i].photoLink = photoPost.photoLink;
            }
            if(photoPost.hashTags!= null && photoPosts[i].hashTags!= null){
                while(photoPosts[i].hashTags.length != 0){
                    photoPosts[i].hashTags.pop();
                }

            }
            if(photoPosts[i].hashTags == null){
                photoPosts[i].hashTags = [];
            }
            if(photoPost.hashTags != null){
                for(var j = 0;j < photoPost.hashTags.length;j++){
                    if(typeof photoPost.hashTags[j] == 'string'){
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

        console.log("removePhotoPost('1')");
        console.log(removePhotoPost('1'));
        console.log("getPhotoPost('1')");
        console.log(getPhotoPost('1'));
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
        console.log("getPhotoPost('13')");
        console.log(getPhotoPosts('13'));
    }

    log();
})();