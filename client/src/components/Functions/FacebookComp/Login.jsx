import React from "react";
import FacebookLogin from "react-facebook-login";

export default function FacebookLog() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <FacebookLogin
        appId="710854560125719"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}
