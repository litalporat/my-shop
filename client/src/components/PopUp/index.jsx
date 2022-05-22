import React from "react";
import './Popup.css'

 
const Popup = props => {

  if(!props.content){
    return(
    <div className="popup-box">
      <div className="box">
      <span className="close-icon" onClick={props.handleClose}>x</span>
          There Is No Content
      </div>
    </div>
    );
  }
  
  return (
    <div className="popup-box">
      <div className="box">
        <div className="popup-details">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <div className={"icon " + props.content.type}></div>
          <p className="text">{props.content.adress}</p>
          <p className="text">{props.content.cost+"$ entry"}</p>
          <p className="amount">{props.content.members+"/"+props.content.amount}</p>
        </div>
        <div className="popup-photos">
          asdasd
        </div>
      </div>
    </div>
  );
};
 
export default Popup;