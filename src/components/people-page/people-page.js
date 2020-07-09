import React, { Component } from 'react';

import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null,
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (<React.Fragment>
            <div className="list">
                <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                />
            </div>
            <div className="details">
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        </React.Fragment>)
    }
}