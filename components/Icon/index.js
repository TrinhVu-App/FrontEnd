import { TouchableOpacity, Pressable, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { ICON_STORY_AUDIO_RESOURCE, ICON_STORY_IMAGE_RESOURCE } from '../../DEMO_ICON_STORY_DATA'
// import { Group, Image, Text, useFont, useImage, useSpring, useValue } from '@shopify/react-native-skia'
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { Audio } from 'expo-av'
// { iconX, iconY, iconH, iconW, font, text, isHighlight, image, isToggle }

const Icon = ({ imageID, text, w, h, highlight, word, audioID, isSyncText}) => {
  const [toggle, setToggle] = useState(false)
  const [sound, setSound] = useState()

  // console.log(`${text} + ${w} + ${h}`);
  // const [highlight, setHighLight] = useState(false)

  const audio = ICON_STORY_AUDIO_RESOURCE[audioID]

  async function playSound(audio) {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  let hasSymbol = false;
  let symbol = word.replace(/[a-zA-Z0-9 ]/g, '')
  if (symbol.length > 0) {
    hasSymbol = true
  }

  const image = ICON_STORY_IMAGE_RESOURCE[imageID];

  const offset = useSharedValue(0);
  const scale = useSharedValue(1);

	const animateStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }, {scale: scale.value}],
	}));

	const OFFSET = 2;
	const TIME = 50;

  const touchHandler = () => {
    if(!isSyncText) {
    if (!toggle) {
      playSound(audio);
      scale.value = withSpring(0.7)
      setToggle(!toggle)
    } else {
      scale.value = withSpring(1)
      setToggle(!toggle)
    }
    } else {
      console.log("Disabled until synctext is done!");
      offset.value = withSequence(
        withTiming(-OFFSET, { duration: TIME / 2 }),
        withRepeat(withTiming(OFFSET, { duration: TIME }), 3, true),
        withTiming(0, { duration: TIME / 2 })
      );
    }
    
  }

  useEffect(() => {
      setToggle(false)
      scale.value = withSpring(1)

  }, [isSyncText])


  if (highlight) {
    scale.value = withSpring(1.3)
    setTimeout(() => {
      scale.value = withSpring(1)
    }, 300)
  }


  return (
    <View style={[styles.container, { width: (hasSymbol? (w+ 20) : (w)), height: (h + 22) }]}>
      <Pressable style={[styles.image, {width: w, height: h}]} onPress={touchHandler}>
        <Animated.Image
        style={[{width: w, height: h}, animateStyle]}
          source={image}
          resizeMode={'contain'}
        />
      </Pressable>
      {toggle && (
        <Text style={[styles.textContainer, { position: 'absolute', top: (h + 6),}]}>
          <Text style={styles.text}>{text}</Text>
        </Text>
      )}
      {hasSymbol && (
        <Text style={[styles.symbol, {color: (highlight? ("red") : ("black"))}]}>{symbol} </Text>
      )}
      
    </View>
  )
}

export default Icon