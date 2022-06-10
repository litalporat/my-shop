import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = ({ lat, lng})=> {

    return (
      <div style={{ height: "40vh", width: "40vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCVkzKt1VA52RTj2iEhedowhQdxpxB9TaI"}}
          defaultCenter={{ lat, lng }}
          defaultZoom={11}
        >
          <i
            className='fa-solid fa-location-pin'
            style={{width:"10rem"}}
            lat={lat}
            lng={lng}
            text="My Marker"
            alt="marker"
          > My Shop </i>
          <i
            className='fa-solid fa-location-pin'
            style={{width:"10rem"}}
            lat={31.998329}
            lng={34.768646}
            text="My Marker"
            alt="marker"
          > Another Shop</i>
        </GoogleMapReact>
      </div>
    );
  }
  
  export default Map;