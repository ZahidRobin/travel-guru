import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
let location;
export class GoogleMap extends Component {
    constructor(props) {
      super(props);
     
      this.state = {
        coxsbazar: [{lat: 21.430432, lng: 92.004616},
                {latitude: 21.428811, longitude: 91.973829},
                {latitude: 21.426336, longitude: 91.976128},
                {latitude: 21.426418, longitude: 91.979396},
                {latitude: 21.425932, longitude: 91.978791},
                {latitude: 21.423775, longitude: 91.977085}],
        sundorbon: [{lat: 21.844881, lng: 88.874802},
            {latitude: 21.428811, longitude: 91.973829},
            {latitude: 21.426336, longitude: 91.976128},
            {latitude: 21.426418, longitude: 91.979396},
            {latitude: 21.425932, longitude: 91.978791},
            {latitude: 21.423775, longitude: 91.977085}],
        sreemongol: [{lat: 24.309535, lng: 91.731052},
            {latitude: 21.428811, longitude: 91.973829},
            {latitude: 21.426336, longitude: 91.976128},
            {latitude: 21.426418, longitude: 91.979396},
            {latitude: 21.425932, longitude: 91.978791},
            {latitude: 21.423775, longitude: 91.977085}]
      }
    }
    displayMarkers = () => {
        if(this.props.id == '1'){
            location = "coxsbazar"
        }else if(this.props.id == '2'){
            location = "sreemongol"
        }else if(this.props.id == '3'){
            location = "sundorbon"
        }
        return this.state[location].map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: this.state[location] ? this.state[location][0].lat : '', lng: this.state[location] ? this.state[location][0].lng : ''}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCODpwtC7p1x4sIgP4RqM-8dnQW_QqWbjI")
  })(GoogleMap)