const request = require('request')


const geocode = (address,callback) =>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic291cmF2MmZseSIsImEiOiJja2owdWV4dzUwZW1mMndxanBxemR1MGVvIn0.ZAQmg82Rx4aXHQjC-2SO7A&limit=1'
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location service')
        }
        else 
        if(body.features.length===0){
                callback('Unable to find location try another search')
        } else
        {
            callback(undefined,{
                
            longi: body.features[0].center[0],
            lati: body.features[0].center[1],
            location:  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode