import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { screenHeight, screenWidth } from '../../config'

const minuteToHourConverter = (minutes) =>  {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;
  let formattedHours = 9 + hours < 10 ? `0${hours}` : `${hours}`;
  let formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;

 

  return `${formattedHours}:${formattedMinutes}`;
}

const TwoPointersSlider = ({ }) => {
  const start = screenHeight * 0.13 - 55;
  const end = screenHeight * 0.955 - 55
  const [pointer1value, setPointer1value] = useState(start)
  const [pointer2value, setPointer2value] = useState(end)
  const [lable1, setLable1] = useState("09:00")
  const [lable2, setLable2] = useState("23:00")

  // let p1Lable = 

  const pointer1X = useSharedValue(start)
  
  // const p1Lable = useDerivedValue(() => {
  //   return Math.round(minute*pointer1X.value);
  // })
  const pointer1AnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: pointer1X.value }
    ]
  }))

  const pointer2X = useSharedValue(end)
  const pointer2AnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: pointer2X.value }
    ],
  }))

  const sliderSelectedWidth = useDerivedValue(() => {
    return (pointer2X.value - pointer1X.value);
  })
  const sliderSelectedAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: pointer1X.value },
    ],
    width: sliderSelectedWidth.value
  }))

  const pan1 = Gesture.Pan()
    .onChange((event) => {
      const hypotheticalPosition = pointer1value + event.translationX
      if (hypotheticalPosition > start && hypotheticalPosition < pointer2value - 50) {
        pointer1X.value = hypotheticalPosition;
        // let lable = Math.round(pointer1X.value*(end-start)*100)
        runOnJS(setLable1)()
      }

    })
    .onFinalize((event) => {
      // setPointer1value(pointer1X.value)
      runOnJS(setPointer1value)(pointer1X.value)
      console.log(pointer1value);
    })

  const pan2 = Gesture.Pan()
    .onUpdate((event) => {
      const hypotheticalPosition = pointer2value + event.translationX
      if (hypotheticalPosition > pointer1value + 50 && hypotheticalPosition < end)
        pointer2X.value = hypotheticalPosition;
      runOnJS(setLable2)(Math.round( pointer2X.value))
    })
    .onEnd(() => {
      try {
        runOnJS(setPointer2value)(pointer2X.value)
        console.log(sliderSelectedWidth.value);
      } catch (e) {
        console.log(e);
      }

    })



  // const composed = Gesture.Simultaneous([pan1. pan2])

  return (
    <View style={styles.container}>
      {/* <Text>TwoPointersSlider</Text> */}

      <View style={styles.sliderFrame}>
        <Animated.View style={[styles.sliderSelected, sliderSelectedAnimatedStyle]} />
      </View>
      <GestureDetector gesture={pan1}>
        <Animated.View style={[styles.pointer, pointer1AnimatedStyle]}>
          <Animated.Text style={styles.pointerText}>{lable1}</Animated.Text>
        </Animated.View>
      </GestureDetector>

      <GestureDetector gesture={pan2}>
        <Animated.View style={[styles.pointer, pointer2AnimatedStyle]}>
          <Text style={styles.pointerText}>{lable2}</Text>
        </Animated.View>
      </GestureDetector>


    </View>
  )
}

export default TwoPointersSlider