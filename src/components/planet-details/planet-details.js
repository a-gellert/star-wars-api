import React from 'react';

import './planet-details.css';

const PlanetDetails = () => {
        return (
                <div className="details">
                        <div className="pict"><img src="https://www.nastol.com.ua/download.php?img=201711/2560x1600/nastol.com.ua-254784.jpg" alt="dd"></img></div>

                        <ul className="item">

                                <li className="name descr">Starship name
                        <hr></hr>
                                </li>
                                <li className="item descr">R2D2
                        <hr></hr></li>
                                <li className="item descr">Darth Vader
                        <hr></hr></li>
                                <li className="item descr">R2D2
                        <hr></hr></li>
                                <li className="item descr">Darth Vader
                        <hr></hr></li>
                                <li className="item descr">R2D2
                        <hr></hr></li>
                                <li className="item descr">Darth Vader
                        <hr></hr></li>
                        </ul>
                </div>
        );
}

export default PlanetDetails;