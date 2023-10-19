import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import MapFilter from '../../components/MapFilter';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { screenHeight, screenWidth } from '../../config';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState();
  const [markerData, setMarkerData] = useState([])

  const filterXOffset = 500
  const filterX = useSharedValue(filterXOffset);
  const filterTargetedX = 0
  const filterAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: filterX.value}
    ]
  }))

  useEffect(() => {
    if (showFilter) {
      filterX.value = withSpring(filterTargetedX, {damping: 20})
    } else {
      filterX.value = withSpring(filterXOffset)
    }
  },[showFilter])

  const buttonHandler = () => {
    setShowFilter(_showFilter => !_showFilter)
    // console.log(showFilter);
  }

  const Markers = markerData.map(( venue, index) => {
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
            style={{width: screenHeight, height: screenWidth, borderWidth: 1}}
      >
        {Markers}
    
        </MapView>
      <Animated.View style={[styles.filterContainer, filterAnimatedStyle]}>
          <MapFilter callback={setMarkerData}/>
      </Animated.View>

      <View style={styles.filterButtonContainer}>
        <Button title='Filter' onPress={buttonHandler} />
      </View>

    </View>
  )
}

export default MapScreen