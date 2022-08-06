import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import { Icon, Text } from "./Element.Map.Styled";

const Map = ({ lat, lng, zoom }) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/locations")
      .then(function (response) {
        // handle success
        setLocations(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div style={{ height: "50vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCVkzKt1VA52RTj2iEhedowhQdxpxB9TaI",
        }}
        defaultCenter={{ lat, lng }}
        defaultZoom={11}
      >
        {locations.map((location) => (
          <Icon
            key={location._id}
            className="fa-solid fa-bag-shopping"
            lat={location.lat}
            lng={location.lng}
            text="My Marker"
            alt="marker"
          >
            <Text>{location.name}</Text>
          </Icon>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
