import React, { Component } from 'react';


import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    swapiService = new SwapiService();
    state = {
        selectedPerson: 3
    }

    render() {
        return (
            <div className="background">
                <Header />
                <RandomPlanet />
                <div className="content" >
                    <PeoplePage />
                </div>
                <div className="content" >
                    <div className="list">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                        />
                    </div>
                    <div className="details">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
};
