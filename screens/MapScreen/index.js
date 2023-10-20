import { View, Text, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import MapFilter from '../../components/MapFilter';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { screenHeight, screenWidth } from '../../config';
import MapView, { Marker, MarkerAnimated } from 'react-native-maps';
import * as Location from 'expo-location';
import { layer } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../components/BackButton';



const MapScreen = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState();
  const [markerData, setMarkerData] = useState([])
  const [location, setLocation] = useState()

  const filterXOffset = 500
  const filterX = useSharedValue(filterXOffset);
  const filterTargetedX = 0
  const filterAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: filterX.value }
    ]
  }))

  useEffect(() => {
    if (showFilter) {
      filterX.value = withSpring(filterTargetedX, { damping: 20 })
    } else {
      filterX.value = withSpring(filterXOffset)
    }
  }, [showFilter])

  const filterButtonHandler = () => {
    setShowFilter(_showFilter => !_showFilter)
  }


  const mapRef = useRef(null);

  const goToLocation = (longitude, latitude) => {
    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }, 1000); // Duration in milliseconds
  };


  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    if(location) {
      goToLocation(location.coords.longitude, location.coords.latitude)
    }
  }, [location]);

  const nearMeButtonHandler = () => {
    axios.get('https://starwinelist.com/api/map/closest', {
      params: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    })
      .then(function (response) {
        setMarkerData(response.data.data)
      })
      .finally(() =>
        goToLocation(location.coords.longitude, location.coords.latitude)
      )
      .catch(function (error) {
        console.log(error);
      });
  }


  const Markers = markerData.map((venue, index) => {
    return (
      <Marker
        key={index}
        coordinate={{ latitude: venue.lat, longitude: venue.lng }}
        title={venue.name}

      />
    )
  })

  return (
    <View style={styles.container}>

      <MapView
        ref={mapRef}
        style={{ width: "100%", height: '100%', borderWidth: 2, borderColor: 'red', borderRadius: 12 }}
      >
        {Markers}

        {location && (<Marker
          pinColor='#cf03fc'
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{backgroundColor: '#AB2430', borderRadius: 12, padding: 5, color: 'white'}}>You are here</Text>
            <View >
              <Text style={{ color: 'white', fontSize: 20 }}>📍</Text>
            </View>
          </View>
        </Marker>)}


      </MapView>

      
      <View style={styles.backButtonContainer}>
        <BackButton navigation={navigation}/>
      </View>

      

      <View style={styles.filterButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={nearMeButtonHandler}>
        <FontAwesomeIcon icon={faLocationCrosshairs} color='#AB2430'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={filterButtonHandler}>
        <FontAwesomeIcon icon={faClock} color='#AB2430'/>
        </TouchableOpacity>
        {/* <Button title='Near me' onPress={nearMeButtonHandler} /> */}
        {/* <Button title='Filter' onPress={filterButtonHandler} /> */}
      </View>

      <Animated.View style={[styles.filterContainer, filterAnimatedStyle]}>
        <MapFilter callback={setMarkerData} toggleFilter={setShowFilter} />
      </Animated.View>

    </View>
  )
}

export default MapScreen