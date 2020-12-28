console.log('client side JS loading11');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

//messageOne.textContent = "From JavaScript"

weatherForm.addEventListener('submit',(event)=>{


    
    messageTwo.textContent = ""
    messageThree.textContent = ""
    messageFour.textContent = ""
    messageOne.textContent = ""
    event.preventDefault()
    const location = search.value;
    

    fetch('/weather?address='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data) =>{
        if(data.error){
            messageOne.textContent = ""
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = ""
            messageOne.textContent = "Location: " + data.location;
            messageTwo.textContent = "Current Temperature: " + data.forecast.temp+" degree Celsius" 
            messageThree.textContent = "Sky Forecast: " + data.forecast.sky
            messageFour.textContent = "Cloud % : " + data.forecast.cloud
        }
    })
})
})