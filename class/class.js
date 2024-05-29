class Firstclass {
    constructor(username, email, password)
    {
        this.username = username
        this.email = email
        this.password = password
    }
    
    myfun()
    {
      return  console.log(`my name is ${this.username.toUpperCase()}`);
    }
}

 const user = new Firstclass('salikur rahman', 'salikur71@gmail.com', '123')
 user.myfun()


 // behind seen

 function User(username, gmail, password)
 {
    this.username = username
    this.gmail = gmail
    this.password = password
 }

    User.prototype.encrypet= function()
    {
       return `${this.password}abc`
    }

  const userA = new User('salikur', 'salikur71@gmail.com', '123')
    // console.log(userA);
   // console.log(userA.encrypet());


