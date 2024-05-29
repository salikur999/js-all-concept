const clock = document.querySelector('.clock')
setInterval(function(){
    let date = new Date()
    clock.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`
},1000)