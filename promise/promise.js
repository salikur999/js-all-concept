 //first promise
 const promise = new Promise(function(resolve, reject)
{
    setTimeout(() => {
        console.log('hello');
        resolve()
    }, 1000);
})


promise.then(function()
{
    console.log('completed resolve');
})

//second promise
new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('HI');
        resolve()
    }, 1000);
}).then(()=>{console.log('second promise is completed');})

//third promise
new Promise((resolve, reject)=>{
    resolve({name: 'md salikur ranman', email: 'salikur71@gmail.com'})
    
})
.then((user)=>{
    user
    console.log(user);
})

//forth promise
new Promise((resolve, reject)=>
{
    let error = true
    if(!error)
        {
            resolve({name: 'salikur rahman', phone: '017.......43'})
        }
    
        else{
            reject('Error found')
        }
})
.then((user)=>
{
   return user.name
    // console.log(user.name);
})
.then((name)=>{
    console.log(name);
})
.catch((error)=>{
    console.log(error);
})


//async function 

const newpromise = new Promise ((resolve, reject)=>
    {
      setTimeout(() => {
        let error = false
        if(!error)
            {
                resolve({name: 'kashiat rahman', phone: '017.......50'})
            }
        
            else{
                reject('Error found')
            }
      }, 1000);
    });

    async function promisefun (){
      try {
        const resolve= await newpromise
        console.log(resolve);
      } catch (e) {
        console.log(e);
      }
        
    }
    promisefun()

//using try catch block
    async function getalluser ()
    {
      try {
        const request =  await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await request.json()
      console.log(data);
      } catch (error) {
        console.log(error);
      }

    }
    getalluser()

    //using then catch block
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resolve)=>
    {
      return  resolve.json()
    })
    .then((user)=>
    {
        console.log(user);
    })
    .catch((error)=>
    {
        console.log(error);
    })