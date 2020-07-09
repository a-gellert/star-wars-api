export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._tranformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._tranformPerson(person);
    }
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._tranformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._tranformPlanet(planet);
    }
    getAllStarShips = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._tranformStarship);
    }
    getStarship = async (id) => {
        const starhip = await this.getResource(`/starhips/${id}`);
        return this._tranformStarhip(starhip);
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _tranformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationSpeed: planet.rotation_period,
            diameter: planet.diameter
        };
    }
    _tranformStarship = (starhip) => {
        return {
            id: this._extractId(starhip),
            name: starhip.name,
            model: starhip.model,
            manufacturer: starhip.manufacturer,
            costInCredits: starhip.costInCredits,
            length: starhip.length,
            crew: starhip.crew,
            passengers: starhip.passengers,
            cargoCapacity: starhip.cargoCapacity
        };
    }
    _tranformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            length: person.length,
            crew: person.crew,
            passengers: person.passengers,
            cargoCapacity: person.cargo_capacity
        };
    }
}

