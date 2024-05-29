//object getOwnPropertyDescriptor using math.pi (writable, enumerable , configurable )
//is false then not possible to change pi value 
//Object.getOwnPropertyDescriptor(Math, 'PI') Math is a object PI is value
const mathip = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(mathip);

const username = {
    name: 'salikur rahman',
    gmail: 'salikur71@gmail.com',
    id: '0071',
    createfun: function()
    {
        console.log('hello');
    }
}
//object.getOwnPropertyDescriptor using check (writable, enumerable , configurable ) possible or not 
// this (writable, enumerable , configurable ) property true then possible to change value
console.log(Object.getOwnPropertyDescriptor(username, 'name'));

//object.defineProperty hidden to object 
//example username object name property is hidden 
//one property hidden possible to using loop but big problem 
// why ?  this object property is hidden 

Object.defineProperty(username, 'name',{
    // writable: false,
    enumerable: false,
    // configurable: false
})

for (let [key, value] of Object.entries(username)) {
    if( typeof value !== 'function')
        {
            console.log(`${key}, ${value}`);
        }
}