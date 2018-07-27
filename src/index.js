import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery';
import'popper.js';
import SmallBox from "./components/SmallBox/SmallBox.js";
import OtherBox from "./components/OtherBox/OtherBox.js";
import PropTypes from "prop-types";

let Clock = (props) => {
    return  (<div className ="counterBackground">
    <SmallBox/>
    <OtherBox className ="six">{props.digitSix % 10000000}</OtherBox>
    <OtherBox className ="five">{props.digitFive % 100000}</OtherBox>
    <OtherBox className ="four">{props.digitFour % 10000}</OtherBox>
    <OtherBox className ="three">{props.digitThree % 1000}</OtherBox>
    <OtherBox className ="two">{props.digitTwo % 100}</OtherBox>
    <OtherBox className ="one">{props.digitOne % 10}</OtherBox>
    </div>);
}
Clock.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};


let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(one, two, three, four, five, six);
    counter++;
    ReactDOM.render(
        <Clock digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}  />,
        document.getElementById('root')
        );
registerServiceWorker();
},1000);


    