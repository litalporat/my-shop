import React from "react";
import "./ArrowBtn.css";

const ArrowBtn = (props) => {
  return (
    <button class="learn-more" onClick={props.onClick}>
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">{props.text}</span>
    </button>
  );
};

export default ArrowBtn;
