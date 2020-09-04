# Sää tänään

Harrastusprojektina kehitetty sääsovellus.

## Demo

[sää.kaikkitietokoneista.net](https://sää.kaikkitietokoneista.net)

## Asennus ja käynnistäminen

Ensiksi aja komento
```bash
npm install
```

Seuraavaksi voit luoda _.env_-tiedoston, johon voi konfiguroida portin ja API-avaimen. Esimerkki:

```env

APIKEY=3909dDOad3iuoasd
PORT=4040

```

Nyt voit käynnistää ohjelman komennolla

```
npm start
```

Sen pitäsi näkyä osoitteessa http://localhost:4040

## TODO

- Tuki reverse proxyille