import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {


    state = {
        itemList: null
    };
    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }
    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li
                    className="it-li"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >{name}
                    <hr></hr>
                </li>
            )
        });
    }
    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return <Spinner />
        }
        const items = this.renderItems(itemList);
        return (
            <div >
                <ul className="it-ul">
                    {items}
                </ul>
            </div>
        );
    }
}