import React from 'react';
import './ArrowBtn.css'

const ArrowBtn = props => {
    return (
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">{props.content}</span>
        </button>
    );
};

export default ArrowBtn;