# Weather Today

Weather site created as a hobby project

## Demo

[weather.kaikkitietokoneista.net](https://weather.kaikkitietokoneista.net)

## Installation and starting

### Production

There is a docker image available on Docker hub which you can use. Example:

```bash
docker run -e APIKEY=somethingsecret -dp 8008:4040 --name="weather" kaikkitietokoneista/weather-today 
```

### Development

Firstly run command
```bash
npm install
```

After that you can create _.env_ file, where you can configure port (optional: by default program will appear on port `4040`) and API-key (required: get from openweathermap). Example: 

```env

APIKEY=3909dDOad3iuoasd
PORT=4040

```

Now you can start the program

```
npm start
```

Now it should be available at [http://localhost:4040](http://localhost:4040)
