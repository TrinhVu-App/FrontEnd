import { ImageBackgroundBase, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Icon from '../../components/Icon'
import { Canvas, Circle, Fill, Group, Image, Text, useFont, useImage, useTouchHandler } from '@shopify/react-native-skia'
import { DEMO_ICON_STORY, ICON_STORY_IMAGE_RESOURCE } from '../../DEMO_ICON_STORY_DATA'
import { useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import IconPageTitle from '../../components/IconPageTitle'
import { screenHeight, screenWidth } from '../../config'

const IconStoryPageView = () => {
  const [storyData, setPageData] = useState(DEMO_ICON_STORY);
  const pageData = storyData.pages[3];
  const pageTitle = pageData.title;
  const pageAudio = pageData.titleAudio;
  const titleAudioDuration = pageData.titleAudioDuration
  const sync_data = pageData.sync_data;
  const icons = pageData.icons;

  const img = useImage(ICON_STORY_IMAGE_RESOURCE[pageData.background])
  const backgroundConfig = pageData.backgroundConfig;

  // let imgX = screenWidth * backgroundConfig["x"]
  // let imgY = screenHeight * backgroundConfig["y"]
  // let imgW = screenWidth * backgroundConfig["w"]
  // let imgH = screenHeight * backgroundConfig["h"]

  let imgX = screenWidth * 0.2
  let imgY = screenHeight * 0.75
  let imgW = screenWidth * 0.3
  let imgH = screenHeight * 0.3


  return (
    <View style={styles.container}>


      <Canvas style={{ width: "100%", height: "100%" }}>
        <Image
          image={img}
          y={imgY}
          x={imgX}
          fit={'contain'}
          width={imgW}
          height={imgH}
        />
      </Canvas>

      <View style={styles.titleContainer}>
        <IconPageTitle
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