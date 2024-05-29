
const User = {
    _email: 'salikur71@gmail.com',
    _password: 'abc',

    get email()
    {
        return this._email.toUpperCase()
    },
    set email(value)
    {
        this._email = value
    }
}
const useuser = Object.create(User)
console.log(useuser.email);
