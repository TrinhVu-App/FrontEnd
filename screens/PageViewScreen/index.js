import { View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Directions, Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  AUDIO_RESOURCE,
  IMAGE_RESOURCE,
  DEMO_STORY_DATA
} from '../../DEMO_DATA'
import { HEIGHT_SCALE, SourceSansPro, WIDTH_SCALE, screenHeight, screenWidth } from '../../config';
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
} from "@shopify/react-native-skia";
import { Audio } from 'expo-av'
import { useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import BackButton from '../../components/BackButton'
import PageTitle2 from '../../components/PageTitle2'



//check if a touch is in hitbox of an item
const checkCord = (x, y, touchable) => {
  let result = [false, '', {}]
  try {
    if ((touchable.position.x * WIDTH_SCALE) <= x && x <= ((touchable.position.x + touchable.width) * WIDTH_SCALE)) {
      if ((touchable.position.y * HEIGHT_SCALE) <= y && y <= ((touchable.position.y + touchable.height) * HEIGHT_SCALE)) {
        result = [true, touchable.name, AUDIO_RESOURCE[touchable.audio]]
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }

}

//iterate user's touch through list of items in the page
const itemsHitBoxCheck = (x, y, touchables) => {
  let result = [false, '', {}]
  try {
    touchables.map((touchable) => {
      const checkResult = checkCord(x, y, touchable);
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
const PageViewScreen = (props) => {
  const navigation = props.navigation;
  const [currentPage, setCurrentPage] = useState(DEMO_STORY_DATA.pages[0])
  const [lableText, setLableText] = useState("")
  const [isShowingLable, setIsShowingLable] = useState(false)
  const [sound, setSound] = useState();
  const [isSyncText, setIsSyncText] = useState(false);
  const [itemsCord, setItemsCord] = useState(currentPage.touchables);
  const [imageID, setImageID] = useState(currentPage.background)

  //load background image for canvas
  const bg = useImage(IMAGE_RESOURCE[imageID]);

  //process to display of the title
  const pageTitle = currentPage.title;
  const sync_data = currentPage.sync_data;
  const titleAudio = currentPage.titleAudio;
  const titleAudioDuration = currentPage.titleAudioDuration;

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

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      if (!isSyncText) {
        if (currentPage.ID < DEMO_STORY_DATA.pages.length - 1) {
          setCurrentPage((currentPage) => {
            const newPage = DEMO_STORY_DATA.pages[currentPage.ID + 1]
            setItemsCord(newPage.touchables);
            setImageID(newPage.background);

            return DEMO_STORY_DATA.pages[currentPage.ID + 1]
          })
        }
      }
    })

  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(() => {
      if (!isSyncText) {
        if (currentPage.ID > 0) {
          setCurrentPage((currentPage) => {
            const newPage = DEMO_STORY_DATA.pages[currentPage.ID - 1]
            setItemsCord(newPage.touchables);
            setImageID(newPage.background);

            return DEMO_STORY_DATA.pages[currentPage.ID - 1]
          })
        }
      }

    })
  //process to handle user's touch, display lable of touchables
  const cx = useValue(10);
  const cy = useValue(10);
  let timeoutID;
  const lableBgX = useValue(10);
  const lableBgY = useValue(10);
  const touchHander = useTouchHandler({
    onStart: ({ x, y }) => {
      if (!isSyncText) {
        const pointerCheck = itemsHitBoxCheck(x, y, itemsCord)
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
    onEnd: () => {
      if (!isSyncText) {
        timeoutID = setTimeout(() => {
          setIsShowingLable(false)
        }, 2000)
      }

    }
  }, [itemsCord, isSyncText]);

  const changeIsSyncText = (isSyncText) => {
    setIsSyncText(isSyncText)
  }

  const composed = Gesture.Simultaneous(flingLeft, flingRight)

  return (
    <GestureHandlerRootView >
      <GestureDetector gesture={composed}>
        <View style={styles.container}>
          <PageTitle
            pageTitle={pageTitle}
            titleAudioDuration={titleAudioDuration}
            lable={lableText}
            isShowingLable={isShowingLable}
            syncData={sync_data}
            titleAudio={titleAudio}
            changeIsSyncText={changeIsSyncText} />
          <View style={styles.backButton}>
            <BackButton navigation={navigation} />
          </View>
          <Canvas style={styles.canvas} onTouch={touchHander}>
            <Image
              image={bg}
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
        </View>


      </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default PageViewScreen