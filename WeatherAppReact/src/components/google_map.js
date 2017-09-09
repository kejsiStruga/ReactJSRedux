import React, { Component } from 'react';
class GoogleMap extends Component {

  componentDidMount() {
    var map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });

    //autocomplete.bindTo('bounds', map);
    //autocomplete.addListener('place_changed', this.fillInAddress(autocomplete));
  }


 fillInAddress(autocomplete) {
   console.log('fill address!');
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

}

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;