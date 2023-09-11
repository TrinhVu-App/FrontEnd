import { Dimensions, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AUDIO_RESOURCE, DEMO_PAGE_DATA_1, IMAGE_RESOURCE } from '../../DEMO_DATA'
import { SourceSansPro } from '../../config';
import {
  Canvas,
  useImage,
  Image,
  Text,
  useFont,
  Paint,
  Rect,
  useTouchHandler,
  useValue,
  Group,
} from "@shopify/react-native-skia";
import { Audio } from 'expo-av'
import { useEffect } from 'react';
import PageTitle from '../../components/PageTitle';

//Static data
const itemsCord = DEMO_PAGE_DATA_1.touchables;

//check if a touch is in hitbox of an item
const checkCord = (x, y, touchable) => {
  let result = [false, '', {}]
  if (touchable.position.x <= x && x <= (touchable.position.x + touchable.width)) {
    if (touchable.position.y <= y && y <= (touchable.position.y + touchable.height)) {
      result = [true, touchable.name, AUDIO_RESOURCE[touchable.audio]]
    }
  }
  return result;
}

//iterate user's touch through list of items in the page
const itemsHitBoxCheck = (x, y, touchables) => {
  let result = [false, '', {}]
  touchables.map((touchable) => {
    const checkResult = checkCord(x, y, touchable);
    if (checkResult[0]) {
      result = checkResult
    }
  })
  return result
}

//Story page view component
const PageViewScreen = () => {
  //set some states
  const [lableText, setLableText] = useState("")
  const [isShowingLable, setIsShowingLable] = useState(false)
  const [sound, setSound] = useState();

  //load background image for canvas
  const image = useImage(IMAGE_RESOURCE[DEMO_PAGE_DATA_1.background]);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  //process to display of the title
  const pageTitle = DEMO_PAGE_DATA_1.title;
  const sync_data = DEMO_PAGE_DATA_1.sync_data;
  const titleAudio = DEMO_PAGE_DATA_1.titleAudio;

  const fontSize = 30;
  const font = useFont(SourceSansPro, fontSize);
  let textWidth = 13;
  if (font) {
    textWidth = font.getTextWidth(pageTitle)
    lableWidth = font.getTextWidth(lableText)
  }

  //process to play sounds
  async function playSound(audio) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(audio);

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  //process to handle user's touch, display lable of touchables
  const cx = useValue(10);
  const cy = useValue(10);
  let timeoutID;
  const touchHander = useTouchHandler({
    onStart: ({ x, y }) => {
      const pointerCheck = itemsHitBoxCheck(x, y, itemsCord)
      if (pointerCheck[0]) {
        clearTimeout(timeoutID) 
        setLableText(pointerCheck[1])
        setIsShowingLable(true)
        playSound(pointerCheck[2])
        cx.current = x - lableWidth / 2;
        cy.current = y;
      }

    },
    onEnd: () => {
      timeoutID = setTimeout(() => {
        setIsShowingLable(false)
      }, 2000)
    }
  });
  
  const lableBgX = cx.current 
  let lableBgY = cy.current - fontSize +5

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle pageTitle={pageTitle} lable={lableText} isShowingLable={isShowingLable} syncData={sync_data} titleAudio={titleAudio}/>

      <Canvas style={styles.canvas} onTouch={touchHander}>
        <Image
          image={image}
          fit="fitHeight"
          x={0}
          y={40}
          width={screenWidth}
          height={screenHeight}
        />
        {isShowingLable && (
          <Group>
          <Rect x={lableBgX} y={lableBgY} color="gray" width={lableWidth + 5} height={fontSize + 5} />
          <Text text={lableText} x={cx} y={cy} font={font} color="white" />
          </Group>
        )}
      </Canvas>
    </SafeAreaView>

  )
}

export default PageViewScreen