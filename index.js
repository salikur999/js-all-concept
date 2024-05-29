// without using multiple 
// function multiple ( a, b)
// {
//     let result = 0;
//     for( let i = 0; i <b ; i++)
//     {
//         result += a
//     }
//     return result

// }
// console.log(multiple(5, 7));

// function divide (a, b)
// {
// let result= 0
// while(a>=b)
// {
//     a -= b
//     result++
// }
// return result 
// }
// console.log(divide(27, 9));

// let x = (1+1+'2');
// console.log(x);


// loop

// for (let i = 0; i <= 15; i++) {
//     console.log(`Outer loop Value : ${i}`);
//     for(let j = 0; j<=10; j++ )
//         {
//             console.log(`${i + '*' + j + ' = ' + i*j}`);
//         }
    
// }

// const obj = { 
//     name: 'salikur rahman',
//     email: 'salikur71@gmail.com',
// }
// const obj = [1,2,3,4,5,6]
// for (const obje of obj) {
//     console.log(obje);
// }

//for in loop using a object 
//using for in loop solve this looping problem  
// const object = {
//     name : 'salikur rahman',
//     gmail: 'salikur71@gmail.com',
//     phone: '01778513843'
// }

// for (const key in object) {
//     //1st console is key = name, gmail ... and  2nd console is value = salikur rahman, salikur71@gmail.com...
//     // console.log( key,':',object[key]);
// }


//foreach loop using array
//using foreach loop solve array problem 
// const arr = [
//     {
//         name: 'salikur rahman',
//         gmail: 'salikur71@gmail.com',
//         phone: '01778513843'
//     },
//     {
//         name: 'rasel ahmade',
//         gmail: 'rasel@gmail.com',
//         phone: '017.........'
//     }
// ]

// arr.forEach((item, index, array)=>{
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
//     console.log(array[0]);
// })


//filter using array element search and compar element and detect element
// const Books = [
//     {
//         title: 'First Books',
//         genre: 'History',
//         publication: 2000,
//         edition: 2004
//     },
//     {
//         title: 'Second Books',
//         genre: 'Function',
//         publication: 1999,
//         edition: 2007 
//     },
//     {
//         title: 'Third Books',
//         genre: 'Non Function',
//         publication: 1975,
//         edition: 2009 
//     },
//     {
//         title: 'Forth Books',
//         genre: 'Operating system',
//         publication: 1967,
//         edition: 2011 
//     }
// ]

// const allBooks = Books.filter((title)=>
//     // {return title.publication <= 2000}
//     // {return title.edition >= 2009}
//     {return title.title == 'Second Books' }
// )
// console.log(allBooks);


// //map is using 
// const arr = [1,2,3,4,5,6,7,8,9]
//  const arr1 = arr.map((numb)=>{return numb* 10})
//                 .map((numb)=>{return numb + 1})
//                 .filter((numb)=>{return numb >= 30})
//  console.log(arr1);


//Basic using reduce function solve this problem 
// reduce super power in js
// const arr = [1,2,3,4,5,6,7,8]

// const addNum = arr.reduce((acc, cur)=>{ return acc + cur},0)
// console.log(addNum);

// const ShoppingCart = [
//     {
//         product: 'T-shirt',
//         price: 500
//     },
//     {
//         product: 'Shirt',
//         price: 1200
//     },  {
//         product: 'Pant',
//         price: 2500
//     },  {
//         product: 'mojo-2L',
//         price: 100
//     },
// ]
// // reduce 1st argument is acc stor is initialValue = 0 and cur storing shoppingcart array all element 
// const addPrice = ShoppingCart.reduce((acc, cur)=>{return acc + cur.price }, 0)
// console.log(addPrice);
