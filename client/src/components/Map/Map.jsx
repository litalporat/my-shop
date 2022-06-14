import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ lat, lng }) => {
  return (
    <div style={{ height: "50vh", width: "50vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCVkzKt1VA52RTj2iEhedowhQdxpxB9TaI" }}
        defaultCenter={{ lat, lng }}
        defaultZoom={11}
      >
        <i
          className="fa"
          style={{ width: "3rem", height: "3rem" }}
          lat={lat}
          lng={lng}
          text="My Marker"
          alt="marker"
        >
          <Marker />
        </i>
        <i
          className="fa-solid"
          style={{ width: "3rem", height: "3rem" }}
          lat={31.998329}
          lng={34.768646}
          text="My Marker"
          alt="marker"
        >
          <Marker />
        </i>
      </GoogleMapReact>
    </div>
  );
};

const Marker = (props) => {
  return (
    <div className="SuperAwesomePin">
      <img
        width="100"
        height="100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxQtKWr4e87ZmVk_BAqrZSt8IQmXN-gpq-w&usqp=CAU"
      />
    </div>
  );
};

export default Map;
