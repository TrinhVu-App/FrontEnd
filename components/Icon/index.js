import { TouchableOpacity, Pressable, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { ICON_STORY_AUDIO_RESOURCE, ICON_STORY_IMAGE_RESOURCE } from '../../DEMO_ICON_STORY_DATA'
// import { Group, Image, Text, useFont, useImage, useSpring, useValue } from '@shopify/react-native-skia'
import Animated, { useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'
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

  const width = useSharedValue(w);
  const height = useSharedValue(h);

  const touchHandler = () => {
    if(!isSyncText) {
    if (!toggle) {
      playSound(audio);
      width.value = withSpring(width.value * 0.7)
      height.value = withSpring(height.value * 0.7)
      setToggle(!toggle)
    } else {
      width.value = withSpring(w)
      height.value = withSpring(h)
      setToggle(!toggle)
    }
    } else {
      console.log("Disabled until synctext is done!");
    }
    
  }


  if (highlight) {
    width.value = withSpring(width.value * 1.3);
    height.value = withSpring(height.value * 1.3);

    setTimeout(() => {
      width.value = withSpring(w);
      height.value = withSpring(h);
    }, 300)
  }


  return (
    <View style={[styles.container, { width: (hasSymbol? (w+ 20) : (w)), height: (h + 22) }]}>
      <Pressable style={[styles.image, { width: (w+ 5), height: (h + 22)}]} onPress={touchHandler}>
        <Animated.Image
        style={{width:w, height: h, }}
          source={image}
          resizeMode={'contain'}
          width={width}
          height={height}
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