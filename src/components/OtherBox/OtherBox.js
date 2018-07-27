import React from 'react';
import './OtherBox.css';


let OtherBox = (props) => {
    return <div className = "OtherBox">{props.children}</div>;
};
export default OtherBox;