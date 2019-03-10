const request = require('request')
const geoCode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoib3dubGV2aWF0aGFuIiwiYSI6ImNqdDJqNWI2cDFrM2M0M3A1OWQzNXFiOTQifQ.eKmEcE8F0aCMX-ZiavqzCA' 

    request({url, json:true},(error, {body})=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        }
        else if(body.features.length == 0){
            console.log(url)
            callback('Unable to find mapbox location. Try another search.',undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })

            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            
        }
    })
}

module.exports = geoCode