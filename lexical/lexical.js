//closer 
function outer ()
{
    let username = 'salikur'
    //parents not used to child memory 
    //console.log(user1);
    function inner()
    {
        const user1 = 'kashiat'
        //child used parents memory
        console.log(username);
    }
    function inner2()
    {
        //child to child not share memory 
        // console.log(user1);
        //child used parents memory
        console.log(username);
    }
    // inner()
    // inner2()
}

outer()

//lexical scope
function outerfun ()
{
    let user = 'salikur'
    function innerfun()
    {
        console.log('user',user);
    }
    return innerfun()
}
//share is full scope data

outerfun()