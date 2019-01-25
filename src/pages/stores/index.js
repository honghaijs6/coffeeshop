import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE, AnimatedRegion, Animated, Callout } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';


import { Container, Icon, Header, Tab, Tabs, ScrollableTab, Content, Button } from 'native-base';

import BenHeader from '../../components/BenHeader' ;

import { GREY_COLOR, COFFEE_COLOR } from '../../config/const';

import RetroMapStyle from './retroStyle.json';
import NightMapStyle from './nightStyle.json';


export default class StorePage extends Component{


  state = {

    typeAction:'',
    onAction:'',
    tab:'store',

    region:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },

    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0025,
      longitudeDelta: 0.0025,
    },
    hasLocationPermissions: false,
    locationResult: null,

    markers:[
      {
        "id":377,"stationName":"6 Ave & Canal St","availableDocks":22,"totalDocks":45,"latitude":40.72243797,"longitude":-74.00566443,"statusValue":"In Service","statusKey":1,"availableBikes":19,"stAddress1":"6 Ave & Canal St","stAddress2":"","city":"","postalCode":"","location":"","altitude":"","testStation":false,"lastCommunicationTime":"2019-01-23 11:43:33 AM","landMark":""
      },

    ]


  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });

     
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });

   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0025, longitudeDelta: 0.0025 }});
  };

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };



  render(){

    const { mapRegion } = this.state

    return(
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>

        <BenHeader type="single">
            <View>
              <Text style={{
                fontSize:18,
                fontFamily:'Roboto'
              }}> Stores </Text>
            </View>
        </BenHeader>

        <MapView
          style={{ flex: 1 }}

          provider={PROVIDER_GOOGLE}
          showsUserLocation={ true }
          customMapStyle={
            RetroMapStyle
          }

          region={mapRegion}

          onRegionChangeComplete={this._handleMapRegionChange}
        >
              <Marker draggable

                 coordinate={ {
                   latitude:mapRegion.latitude,
                   longitude: mapRegion.longitude,
                 } }

                 pinColor={ COFFEE_COLOR }
                 title={'Coffee Shop here '}

              >
              </Marker>
        </MapView>


        <SafeAreaView style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          bottom: 0,
          position: 'absolute',
          width: '100%',
          display:'none'
        }}>
          <Text style={{
            color: '#fff',
            lineHeight: 20,
            margin: 20
          }}>{JSON.stringify(mapRegion, null, 2)}</Text>
        </SafeAreaView>

      </Container>

    )
  }
}
