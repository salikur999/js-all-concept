class secondclass{
    constructor (username)
    {
        this.username = username
    }
    getfunction()
    {
        console.log(`my name is ${this.username.toUpperCase()}`);
    }
}

class teacher extends secondclass {
    constructor(username, gmail, password)
    {
        super(username)
        this.gmail = gmail 
        this.password = password
    }
    addcorce()
    {
        console.log(`adding this corse ${this.username}`);
    }
}
const useuser = new teacher('salikur','salikur71@gmail.com', '123')
// useuser.addcorce()
// useuser.getfunction()
// console.log(useuser);
const username =new secondclass('salikur')
console.log(username);
username.getfunction()
useuser.getfunction()