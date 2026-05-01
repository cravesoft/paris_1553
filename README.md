# Paris 1553 — Truschet-Hoyau Map Explorer

An interactive web map of Paris as it appeared in 1553, adapted from [middle-earth-map](https://github.com/frasermarlow/middle-earth-map) by Fraser Marlow — a Leaflet-based webapp originally built for exploring fictional fantasy maps, repurposed here for a historical cartographic document.

## About

The map uses the Truschet-Hoyau plan of Paris (c. 1553), one of the earliest topographic representations of the city. It is tiled and served as a Leaflet tile layer, with annotated markers for notable landmarks: churches, royal palaces, civic buildings, bridges, and city gates.

## Map attribution

By Olivier Truschet & Germain Hoyau — [10.3931/e-rara-20453](https://doi.org/10.3931/e-rara-20453). Info: [Kartenportal.CH](http://suche.kartenportal.ch/#id=11933819X), Public domain, [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=43069864).

## Tech stack

- [Leaflet.js](https://leafletjs.com/) for the map rendering
- Pre-generated image tiles (`generate_tiles.py`)
- Static HTML/CSS/JS — no build step required

## Usage

Serve the project root with any static file server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
