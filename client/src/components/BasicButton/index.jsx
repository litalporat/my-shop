import React from 'react';
import './BasicButton.css'

const BasicButton = props => {
    return (
        <button 
        className="basic-button"
        onClick={props.onClick}>
            {props.title}
        </button>
    );
};

export default BasicButton;