import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

const MapContainer = ({ text }) => (
    <div>
        {text}
    </div>
);

const exampleMapStyles = [
  {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
          {
              color: "#eeeeee",
          },
      ],
  },
  {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
          {
              visibility: "off",
          },
      ],
  },
  {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
          {
              color: "#9e9e9e",
          },
      ],
  },
];
 
class CustomGoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 42.11505085020447,
      lng:  1.800434456132054
    },
    zoom: 15,
    // apiKey: 'AIzaSyAV1zRuF4bsl5gBe42wDAthasx0VJBx-C0'
  };

  
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.props.height, width: this.props.width}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: this.props.apiKey }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{
                styles: exampleMapStyles,
                disableDefaultUI: true
                
            }}
        >
          <MapContainer
            lat={this.props.lat}
            lng={this.props.lng}
            text={<RoomIcon htmlColor={this.props.iconColor}/>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default CustomGoogleMaps;