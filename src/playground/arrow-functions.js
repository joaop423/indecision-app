const user = {
    name: 'josé',
    users:{
        name:'maria',
        getname: function () {
            return this.name  
        } 
    }
}

console.log(user.users.getname());
