//call function current execution context passing other function
function firstfun(username)
{
    //this function current reference pass
    this.username = username
}
function secondfun(username, gmail, phone)
{
    //this reference use this function
    firstfun.call(this, username)

    this.gmail = gmail
    this.phone = phone 
}
const allfunvalue =new secondfun('salikur rahman', 'salikur71@gmail.com', '017......43')
console.log(allfunvalue);

