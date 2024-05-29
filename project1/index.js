const buttons = document.querySelectorAll('.button')
console.log(buttons);
const body = document.querySelector("body")
buttons.forEach(function(button)
{
 button.addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);
    // if(e.target.id === 'grey')
    //     {
    //         body.style.backgroundColor = 'grey'
    //     }

        function changecolor (color){
            if(e.target.id === color)
                {
                    body.style.backgroundColor = color
                }
        }
        changecolor('grey')
        changecolor('green')
        changecolor('aqua')
        changecolor('orangered')

 })
})