const express = require('express')
const app = express()
const weather = require('openweather-apis')
const geoip = require('geoip-lite')

require('dotenv').config()

const port = process.env.PORT || 4040
const apikey = process.env.APIKEY || console.error('Virheellinen tai puuttuva API-avain')

if (apikey == null || apikey == undefined) {
    process.exit()
}

weather.setLang('fi')
weather.setUnits('metric')
weather.setAPPID(apikey)

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views/static'))

app.get('/', function(req, res) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    let kaupunki = req.query.kaupunki
    let ipkaupunki = geoip.lookup(ip)

    if (kaupunki) {
        weather.setCity(kaupunki)
    } else if (ipkaupunki) {
        weather.setCity(ipkaupunki)
    } else {
        weather.setCity('Helsinki')
    }

    weather.getAllWeather(function(err, WeatherJSON){
        res.render('index', {
            'weather': WeatherJSON
        });
    });
});

app.listen(port);
console.log(`Weather app is listening at ${port}`);