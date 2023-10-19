import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import MapFilter from '../../components/MapFilter';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { screenWidth } from '../../config';

const MapScreen = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState();

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
      console.log(showFilter);
      filterX.value = withSpring(filterTargetedX, {damping: 20})
    } else {
      console.log(showFilter);
      filterX.value = withSpring(filterXOffset)
    }
  },[showFilter])

  const buttonHandler = () => {
    setShowFilter(_showFilter => !_showFilter)
    // console.log(showFilter);
  }
  return (
    <View style={styles.container}>

      <Animated.View style={[styles.filterContainer, filterAnimatedStyle]}>
        {/* {showFilter && ( */}
          <MapFilter />
        {/* // )} */}
      </Animated.View>

      <View style={styles.filterButtonContainer}>
        <Button title='Filter' onPress={buttonHandler} />
      </View>

    </View>
  )
}

export default MapScreen