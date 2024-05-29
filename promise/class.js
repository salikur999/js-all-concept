//this 
const user =
{
    usernsme: 'salikur rahman',
    gmail: 'salikur71@gmail.com',
    innerfun: function()
    {
        console.log(this)
    },
    
}

// console.log(user.usernsme);
// console.log(user.innerfun());

function User(username, gmail, phone)
{
    this.username = username
    this.gmail = gmail
    this.phone = phone
    this.gatting = function()
    {
        console.log(`username is ${this.username}`);
    }
    return this
}
//without using new 
// const user1 = User('salikur rahman', 'salikur71@gmail.com', '017.......43')
// const user2 = User('kashiat rahman', 'kashiat@gmail.com', '017.........50')

//using new
// const user1 =new User('salikur rahman', 'salikur71@gmail.com', '017.......43')
// const user2 =new User('kashiat rahman', 'kashiat@gmail.com', '017.........50')
console.log(User('salikur rahman', 'salikur71@.gmail.com', '017.......43').gatting());