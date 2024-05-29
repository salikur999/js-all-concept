//object 
//all element is javascript object 
// javascript  function is object

function obj(username, gmail)
{
    this.username = username
    this.gmail = gmail
}
obj.prototype.inner = function()
{
    console.log(`my name is ${this.username}`);
}

//const innerf = new obj('salikur rahman', 'salikur71@gmail.com')
// innerf.inner()


//prototype

let myHero = ['salima', 'kashiat']
let heropower = {
    salima: 'affection',
    kashiat: 'affection',
    getpower: function()
    {
        console.log(`Mother power is ${this.salima}`);
    }
}
//object all element access object == object 
// javascript all element is object 
Object.prototype.love = function()
{
    console.log(`love is present all `);
}
// heropower.love()
// myHero.love()


Array.prototype.bad = function()
{
    console.log(`Bad is not present to all`);
}
//myHero.bad()
// array is not present to all
// Example is this heropower . heropower is object . this not access to object
// heropower.bad()

const user = {
    name: 'salikur rahman',
    gmail: 'salikur71@gmail.com',
    getfunction: function()
    {
        console.log(`my name is ${this.name}`);
    }
}

const teacher = {
    name : 'kashiat',
    gmail: 'kashiat71@gmail.com',
    getfunction: function()
    {
        console.log(`my name is ${this.name}`);
    },
    // __proto__:user
}
// teacher.__proto__=user
// console.log(teacher.__proto__.name);

// Object.getPrototypeOf(user, teacher)
// user.getfunction()
// user.getfunction.call(teacher)


const thisname = 'salikur rahman'

String.prototype.truelength = function()
{
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
}


thisname.truelength()