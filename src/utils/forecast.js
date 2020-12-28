const request = require('request');


const forecast = (lati, longi,callback) =>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&appid=e51287e2448092093826ce2f75bf1a49&units=metric'
    request({url,json:true},(error,{body}) =>{
        if(error)
        {
            callback('Unable to connect to weather service')
        } else
        if(!body.weather){
            callback('Unable to find weather of location')
        } else
        {
            callback(undefined,{
                 temp: body.main.temp ,
                 cloud: body.clouds.all,
                 sky: body.weather[0].main
            })
        }
    })
}


module.exports = forecast






