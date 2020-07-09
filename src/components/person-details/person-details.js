import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

        swapiService = new SwapiService();
        state = {
                person: null,
                loading: true
        };
        componentDidMount() {
                this.updatePerson();
        }
        componentDidUpdate(prevProps) {
                if (this.props.personId !== prevProps.personId) {
                        this.updatePerson();
                }
        }
        updatePerson() {
                const { personId } = this.props;
                if (!personId) {
                        return;
                }
                this.swapiService
                        .getPerson(personId)
                        .then((person) => {
                                this.setState({ person });
                        });
        }

        render() {
                if (!this.state.person) {
                        return <span>Select a person</span>
                }
                const { person: {
                        id, name, gender, birthYear, eyeColor
                } } = this.state;
                return (
                        <div className="details">
                                <div className="pict"><img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="dd"></img>
                                </div>

                                <ul className="item">

                                        <li className="name descr">{name}
                                                <hr></hr>
                                        </li>
                                        <li className="item descr">Gender: {gender}
                                                <hr></hr></li>
                                        <li className="item descr">Birth year: {birthYear}
                                                <hr></hr></li>
                                        <li className="item descr">Eye color: {eyeColor}
                                                <hr></hr></li>
                                </ul>
                        </div>
                );
        }
}
