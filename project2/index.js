const form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const finalresult = document.querySelector('.ResultDiv')
        
    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Not a valid height ${height}`
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Not a valid weight ${weight}`
    }
    else
    {
       const bmi= (weight / ((height * height)/10000)).toFixed(2)
       result.innerHTML = `<span>${bmi}</span>`
    }
    
    if(0<result < 16.6 && result>16.6)
        {
            finalresult.innerHTML = `<h3>Under weight</h3>`
        }
        else if(16.6 <result < 24.9 && result>24.9)
            {
                finalresult.innerHTML = `<h3>Normal Range</h3>`
            }
            else{
               finalresult.innerHTML =  `<h3>OverWeight</h3>`
            }


})