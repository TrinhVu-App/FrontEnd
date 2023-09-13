import { Dimensions, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AUDIO_RESOURCE, DEMO_PAGE_DATA_1, DEMO_PAGE_DATA_2, IMAGE_RESOURCE } from '../../DEMO_DATA'
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
  const currentPage = DEMO_PAGE_DATA_2;
  //set some states
  const [lableText, setLableText] = useState("")
  const [isShowingLable, setIsShowingLable] = useState(false)
  const [sound, setSound] = useState();

  //load background image for canvas
  const image = useImage(IMAGE_RESOURCE[currentPage.background]);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  //process to display of the title
  const pageTitle = currentPage.title;
  const sync_data = currentPage.sync_data;
  const titleAudio = currentPage.titleAudio;
  const titleAudioDuration = currentPage.titleAudioDuration;
  const itemsCord = currentPage.touchables;

  const fontSize = 30;
  const font = useFont(SourceSansPro, fontSize);
  // let textWidth = 13;
  if (font) {
    // textWidth = font.getTextWidth(pageTitle)
    lableWidth = font.getTextWidth(lableText)
  }

  // process to play sounds
  async function playSound(audio) {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(audio);

    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        // console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  //process to handle user's touch, display lable of touchables
  const cx = useValue(10);
  const cy = useValue(10);
  let timeoutID;
  const  lableBgX = useValue(10);
  const  lableBgY = useValue(10);
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
        lableBgX.current = x - lableWidth / 2 - 5;
        lableBgY.current = y- fontSize +5;
        
      }

    },
    onEnd: () => {
      timeoutID = setTimeout(() => {
        setIsShowingLable(false)
      }, 2000)
    }
  });
  


  return (
    <SafeAreaView style={styles.container}>
      <PageTitle pageTitle={pageTitle} titleAudioDuration={titleAudioDuration} lable={lableText} isShowingLable={isShowingLable} syncData={sync_data} titleAudio={titleAudio}/>

      <Canvas style={styles.canvas} onTouch={touchHander}>
        <Image
          image={image}
          fit="fitHeight"
          x={0}
          y={0}
          width={screenWidth}
          height={screenHeight}
        />
        {isShowingLable && (
          <Group>
          <Rect x={lableBgX} y={lableBgY} color="gray" width={lableWidth + 10} height={fontSize + 5} />
          <Text text={lableText} x={cx} y={cy} font={font} color="white" />
          </Group>
        )}
      </Canvas>
    </SafeAreaView>

  )
}

export default PageViewScreen