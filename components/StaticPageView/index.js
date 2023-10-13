import { View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Directions, Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  AUDIO_RESOURCE,
  IMAGE_RESOURCE,
  DEMO_STORY_DATA
} from '../../DEMO_DATA'
import { BASE_HEIGHT, BASE_WIDTH, HEIGHT_SCALE, SourceSansPro, WIDTH_SCALE, screenHeight, screenWidth } from '../../config';
import {
  Canvas,
  useImage,
  Image,
  Text,
  useFont,
  Rect,
  useTouchHandler,
  useValue,
  Group,
  Fill,
  Path,
  Shadow,
} from "@shopify/react-native-skia";
import { Audio } from 'expo-av'
import { useEffect } from 'react';
import PageTitle from '../PageTitle';
import BackButton from '../BackButton'
import { ICON_STORY_AUDIO_RESOURCE, ICON_STORY_IMAGE_RESOURCE } from '../../DEMO_ICON_STORY_DATA'



//check if a touch is in hitbox of an item
const checkCord = (x, y, touchable, type) => {
  let audioSource ;
  if(type == 0) {
    audioSource = AUDIO_RESOURCE
  }
  if(type == 1) {
    audioSource = ICON_STORY_AUDIO_RESOURCE
  }
  let result = [false, '', {}]
  try {
    if ((touchable.position.x + ((screenWidth-BASE_WIDTH)/2)) <= x && x <= (((touchable.position.x + ((screenWidth-BASE_WIDTH)/2) + touchable.width) * WIDTH_SCALE))) {
      if ((touchable.position.y * HEIGHT_SCALE) <= y && y <= ((touchable.position.y + touchable.height) * HEIGHT_SCALE)) {
        
        result = [true, touchable.name, audioSource[touchable.audio]]
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }

}

//iterate user's touch through list of items in the page
const itemsHitBoxCheck = (x, y, touchables, type) => {
  let result = [false, '', {}]
  try {
    touchables.map((touchable) => {
      const checkResult = checkCord(x, y, touchable, type);
      if (checkResult[0]) {
        result = checkResult;
      }
    })
    return result
  } catch (error) {
    console.log(error);
  }

}

//Story page view component
const StaticPageView = ({pageData, storyType, setIsSyncText, isSyncText}) => {

  const currentPage = pageData;
  const imageID = currentPage.background;
  const itemsCord = currentPage.touchables
  const type = storyType

  const [lableText, setLableText] = useState("")
  const [isShowingLable, setIsShowingLable] = useState(false)
  const [sound, setSound] = useState();
  const [animPath, setAnimPath] = useState('');

  let gestureDir = 0;
  
  // const [isSyncText, setIsSyncText] = useState(false);

  //load background image for canvas

  let bg
  if (type == 0) {
    bg = useImage(IMAGE_RESOURCE[imageID])
  }
  if (type == 1) {
    bg = useImage(ICON_STORY_IMAGE_RESOURCE[imageID])
  }


  //process to display of the title
  const pageTitle = currentPage.title;
  const sync_data = currentPage.sync_data;
  const titleAudio = currentPage.titleAudio;
  const titleAudioDuration = currentPage.titleAudioDuration;

  const fontSize = 30;
  const font = useFont(SourceSansPro, fontSize);
  if (font) {
    lableWidth = font.getTextWidth(lableText)
  }

  // process to play sounds
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

  //process to handle user's touch, display lable of touchables
  const cx = useValue(10);
  const cy = useValue(10);
  let timeoutID;
  const lableBgX = useValue(10);
  const lableBgY = useValue(10);
  const touchHander = useTouchHandler({
    onStart: ({ x, y }) => {

      if (x > screenWidth - screenWidth / 3) gestureDir = 1; // if gesture is swipe from left to right , it means co to previous page
      if (x < screenWidth / 3) gestureDir = -1;
      if (!isSyncText) {
        console.log("Touch: " +x+ '---' +y);
        const pointerCheck = itemsHitBoxCheck(x, y, itemsCord, type)
        if (pointerCheck[0]) {
          clearTimeout(timeoutID)
          setLableText(pointerCheck[1])
          setIsShowingLable(true)
          playSound(pointerCheck[2])
          cx.current = x - lableWidth / 2;
          cy.current = y;
          lableBgX.current = x - lableWidth / 2 - 5;
          lableBgY.current = y - fontSize + 5;
        }
      }
    },
    onActive: ({ x, y }) => {
      
      if (gestureDir != 0) { // if use intend to change page , trigger the aim
        gestureAnim(gestureDir, Math.round(x), Math.round(y))
      }
    },
    onEnd: () => {

      gestureDir = 0;
      setAnimPath('');
      console.log("Clear Anim");
      if (!isSyncText) {
        timeoutID = setTimeout(() => {
          setIsShowingLable(false)
        }, 2000)
      }

    }
  }, [itemsCord, isSyncText]);

  useEffect(()=> {
    gestureDir = 0;
    setIsShowingLable(false)
      setAnimPath('');
  }, [pageData])

  
  const gestureAnim = (dir, absX, absY) => {
        if (dir == 1) {
          let A = { x: absX, y: absY }
          let C = { x: (screenWidth - ((screenWidth - absX + absY / 4) / 7)), y: 0 }
          let B = { x: A.x + (C.x - A.x) / 4, y: screenHeight }
          let fixCurve1 = { x: A.x + (C.x - A.x) / 2, y: C.y + (A.y - C.y) / 1.5 };
          let fixCurve2 = { x: B.x, y: A.y + (B.y - A.y) / 1.25 };
          setAnimPath('M ' + A.x + ' ' + A.y + ' Q ' + fixCurve1.x + ' ' + fixCurve1.y + ' ' + C.x + ' ' + C.y + ' L ' + B.x + ' ' + B.y + ' Q ' + fixCurve2.x + ' ' + fixCurve2.y + ' ' + A.x + ' ' + A.y + ' Z');
        }
    if (dir == -1) {
        setAnimPath('M ' + absX + ' ' + absY + ' L ' + (absX * 0.5) + ' ' + screenHeight + ' L ' + (absX * 0.3) + ' 0' + ' Z');
    }
  }



  return (
        <View style={styles.container}>

  
          <PageTitle
            pageTitle={pageTitle}
            titleAudioDuration={titleAudioDuration}
            lable={lableText}
            isShowingLable={isShowingLable}
            syncData={sync_data}
            titleAudio={titleAudio}
            type={type}
            changeIsSyncText={setIsSyncText} />
       
          
            
          
          <Canvas style={[styles.canvas]} onTouch={touchHander}>
            <Image
              image={bg}
              fit= 'fitHeight'
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

            
        <Path
          path={animPath}
          color={'#eee4b0'}
        >
          <Shadow
            dx={25}
            dy={15}
            blur={35}
            color="black"
          />
          <Shadow
            inner
            dx={-35}
            dy={0}
            blur={25}
            color="#93b8c4"
          />
        </Path>
          </Canvas>
        </View>
  )
}

export default StaticPageView