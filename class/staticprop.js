class third {
    constructor(username)
    {
        this.username = username
    }
    //static use the element in privet
   static createid()
    {
        return `123`
    }

}
const accessclass = new third('salikur')
//using static you don't access createid
// console.log(accessclass.createid());

class teacher extends third{
    constructor(username, gmail, password)
    {
        super(username)
        this.gmail = gmail
        this.password = password
    }
}

const accessteacher =new teacher('salikur', 'salikur71@gmail.com', '123')
//using a after static not access to createid 
// console.log(accessclass.createid());

