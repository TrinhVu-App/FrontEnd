import { ImageBackgroundBase, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Icon from '../Icon'
import { Canvas, Circle, Fill, Group, Image, Path, Shadow, Text, useFont, useImage, useTouchHandler } from '@shopify/react-native-skia'
import { DEMO_ICON_STORY, ICON_STORY_IMAGE_RESOURCE } from '../../DEMO_ICON_STORY_DATA'
import { useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import IconPageTitle from '../IconPageTitle'
import { screenHeight, screenWidth } from '../../config'


const IconStoryPageView = ({ pageData, }) => {
  
  const [layer, setLayer] = useState(0);

  const pageTitle = pageData.title;
  const pageAudio = pageData.titleAudio;
  const titleAudioDuration = pageData.titleAudioDuration
  const sync_data = pageData.sync_data;
  const icons = pageData.icons;;

  const img = useImage(ICON_STORY_IMAGE_RESOURCE[pageData.background])

  const backgroundConfig = pageData.backgroundConfig;

  let imgX = screenWidth * backgroundConfig["x"]
  let imgY = screenHeight * backgroundConfig["y"]
  let imgW = screenWidth * backgroundConfig["w"]
  let imgH = screenHeight * backgroundConfig["h"]

  const [animPath, setAnimPath] = useState('');
  let gestureDir = 0;
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


  const touchHandler = useTouchHandler({
    onStart: ({ x, y }) => {

      console.log(x);
      setLayer(1)
      if (x > screenWidth - screenWidth / 3) gestureDir = 1; // if gesture is swipe from left to right , it means co to previous page
      if (x < screenWidth / 3) gestureDir = -1;
    },

    onActive: ({ x, y }) => {
      
      if (gestureDir != 0) { // if use intend to change page , trigger the aim
        gestureAnim(gestureDir, Math.round(x), Math.round(y))
      }
    },

    onEnd: () => {
      setLayer(0)
      gestureDir = 0;
      setAnimPath('');
    }


  })


  useEffect(()=> {
    setLayer(0)
      gestureDir = 0;
    setAnimPath('');
    console.log("clear Page Curl");
  }, [pageData])

  return (
    <View style={styles.container}>


      <Canvas style={{ position: "absolute", width: "100%", height: "100%", zIndex: layer}} onTouch={touchHandler}>
        <Image
          image={img}
          y={imgY}
          x={imgX}
          fit={'contain'}
          width={imgW}
          height={imgH}
        />

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

      <View style={[styles.titleContainer, {zIndex: 0}]}>
        <IconPageTitle
          pageID={pageData.ID}
          title={pageTitle}
          audio={pageAudio}
          audioDuration={titleAudioDuration}
          sync_data={sync_data}
          icons={icons}
        />
      </View>
    </View>

  )

}

export default IconStoryPageView