import React from 'react';
import Slider from "react-slick";

function Portfolio(props) {

    return (
        <div id="section3" className="Portfolio bg-color">
            <div className="container">
                <div className="me-name">Portfolio</div>
                <img src="images/reebok3.png" alt=""/>
                <a href="#" className="me-name-in">Online fashion store - Homepage</a>
                <img src="images/reebok2.png" alt=""/>
                <a href="#" className="me-name-in">Online fashion store - Homepage</a>
                <img src="images/reebok1.png" alt=""/>
                <a href="#" className="me-name-in">Online fashion store - Homepage</a>
            </div>
        </div>
    );
}

export default Portfolio;