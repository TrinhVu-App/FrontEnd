import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { screenWidth } from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

const StoryLoaderScreen = ({ navigation, route }) => {

  const [isLoading, setIsLoading] = useState()

  const storyData = route.params.storyData;


  const loadingBarProgress = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    width: loadingBarProgress.value
  }))

  const buttonY = useSharedValue(-500)
  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: buttonY.value },
    ]
  }))

  const barY = useSharedValue(10);
  const loadingBarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: barY.value }
    ]
  }))

  const handX = useSharedValue(20);
  const handAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: handX.value }
    ]
  }))

  let timerID;
  let timing = 0;
  useEffect(() => {
    setIsLoading(true)

    handX.value = withRepeat(
      withSpring(
        600,
        {
          duration: 2000,
          dampingRatio: 1.8,
          stiffness: 273
        }),
      -1,
      true)

    timerID = setInterval(() => {
      if (timing == 500) {
        clearInterval(timerID);
        setIsLoading(false);
      } else {
        loadingBarProgress.value = withSpring(loadingBarProgress.value + 100, { damping: 15 })
        timing = timing + 100
      }

    }, 1000)

    return () => {
      loadingBarProgress.value = 0;
      clearInterval(timerID)
      cancelAnimation(handX)
      clearInterval(buttonTimer)
    }
  }, [])

  let buttonTimer ;

  useEffect(() => {
    if (!isLoading) {
      buttonY.value = withSpring(15, { damping: 20 })
      barY.value = withSpring(1000)

    } else {
      buttonY.value = withSpring(-1000)
      barY.value = withSpring(15, { damping: 20 })
    }
  }, [isLoading])

  const completeButtonHander = () => {
    navigation.replace('storyContent', {"storyData": storyData})
  }

  return (
    <View style={styles.container}>

      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>Swipe left and right to change page</Text>

      </View>


      <Animated.View style={[{ alignItems: 'center', position: 'absolute' }, loadingBarAnimatedStyle]}>
        <Text>Loading...</Text>
        <View style={styles.loadingBar}>
          <Animated.View style={[styles.loadingBarProgress, animatedStyle]}>
          </Animated.View>
        </View>
      </Animated.View>

      <Animated.View style={[
        { position: 'absolute' },
         buttonAnimatedStyle,
         ]}>
        <TouchableOpacity style={styles.loadingCompleteButton} onPress={completeButtonHander}>
          <Text style={styles.loadingCompleteText}>Loading completed!</Text>
          <Text style={styles.loadingCompleteText}>Press here to start the story</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.swipeLeftHandContainer, handAnimatedStyle]}>
        <FontAwesomeIcon icon={faHandPointer} size={40} />
      </Animated.View>


    </View>
  )
}

export default StoryLoaderScreen  