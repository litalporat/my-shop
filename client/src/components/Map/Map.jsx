import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import styled from "styled-components";

const Icon = styled.i`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 20px;
  width: 8rem;
`;
const Text = styled.p`
  font-size: 14px;
  color: #5c5cd1;
  text-align: center;
`;

const Map = ({ lat, lng , zoom}) => {
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
    <div style={{ height: "50vh", width: "50vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCVkzKt1VA52RTj2iEhedowhQdxpxB9TaI",
        }}
        defaultCenter={{ lat, lng }}
        defaultZoom={11}
      >
        {locations.map((location) => (
          <Icon
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
