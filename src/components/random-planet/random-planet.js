import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false
    };
    componentDidMount() {
        
        console.log('dddddd');
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }
    componentWillUnmount() {
        console.log('ddd');
        
        clearInterval(this.interval);
    }
    onPlanetLoad = (planet) => {
        this.setState({ planet, loading: false });

    };
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updatePlanet = () => {
        console.log('ddsss');
        
        const id = Math.floor(Math.random() * 18 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoad)
            .catch(this.onError);
    };
    render() {
        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <div className="error" ><ErrorIndicator /></div> : null;
        const spinner = loading ? <div className="load"><Spinner /></div> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (

            <div className="random">
                <div className="back">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        )
    };
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationSpeed, diameter } = planet;
    return (

        <React.Fragment>
            <div className="planet"><img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="dd"></img></div>
            <div className="name-info">
                {name}
            </div>
            <div className="popul-info">
                <hr></hr>
                <span className="label">Population: </span>{population}
            </div>
            <div className="rot-info">
                <hr></hr>
                <span className="label">Rotation speed: </span>{rotationSpeed}
            </div>
            <div className="diam-info">
                <hr></hr>
                <span className="label">Diameter: </span>{diameter}</div></React.Fragment>


    );
}
