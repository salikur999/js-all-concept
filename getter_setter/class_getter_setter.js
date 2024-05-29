class User{
    constructor(username, password)
    {
        this.username = username
        this.password = password
    }
//get is getting this username 
//parameter and get , set function name allows same
//get return getter 
    get username()
    {
        return this._username.toUpperCase()
    }
    //set is setting this value 
    
    set username(value)
    {
        this._username = value
    }

    get password()
    {
        return `${this._password.toUpperCase()}123`
    }
    set password(value)
    {
        this._password = value
    }
}

const useuser = new User('saliur rahman', 'abc')
console.log(useuser.username);
console.log(useuser.password);