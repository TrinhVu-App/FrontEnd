import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackButton from '../../components/BackButton'
import styles from './styles'
import HeartButton from '../../components/HeartButton'
import { Shadow } from 'react-native-shadow-2'
import StartButton from '../../components/StartButton'
import axios from 'axios'
import { BASE_URL } from '../../config'
import { useContext } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import Spinner from 'react-native-loading-spinner-overlay'
import ReadButton from '../../components/ReadButton'
import { DEMO_STORY_DATA } from '../../DEMO_DATA'
import { DEMO_ICON_STORY } from '../../DEMO_ICON_STORY_DATA'
import LockedButton from '../../components/LockedButton'

const StoryDetail = ({ navigation, route }) => {
  const [storyData, setStoryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const storyID = route.params.storyID
  const [img, setImg] = useState()
  const [unlocked, setUnlocked] = useState(false)

  const getStory = (storyID) => {
    if (storyID == 420) {
      setStoryData(DEMO_STORY_DATA);
      setUnlocked(true)
      setImg(require('../../resource/images/Demo_Thumbnail.png'))
    } else 
    if (storyID == 421) {
      setStoryData(DEMO_ICON_STORY);
      setUnlocked(true)
      setImg(require('../../resource/images/Demo_Thumbnail_IconStory.png'))
    } else {
      setIsLoading(true);

      axios
        .get(`${BASE_URL}/story/${storyID}`)
        .then(res => {
          let data = res.data;
          setStoryData(() => {
            const temp = data;
            setImg({ uri: `${BASE_URL}/story/image/${data.thumbnail}` })
            return data
          });

          setIsLoading(false);
        })
        .catch(e => {
          console.log(e);
          setIsLoading(false);
        })
    }

  }


  useEffect(() => {

    getStory(storyID);


  }, [])

  // useEffect(()=> {
  //   console.log("tf: " +img);
  // }, [img])

  let image = img;

  const setBookmarkPath = (storyData) => {
    switch (storyData.level) {
      case 'A': return require("../../assets/bookmark-A.png");
      case 'B': return require("../../assets/bookmark-B.png");
      case 'C': return require("../../assets/bookmark-C.png");
    }
  }

  const bookmark = setBookmarkPath(storyData)

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.storyThumbContainer}>
        <Image
          source={image}
          style={styles.storyThumb}
        />
        <Image
          source={bookmark}
          style={styles.bookmark}
        />
      </View>
      <View style={styles.storyDetailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{storyData.storyName}</Text>
        </View>
        <View style={styles.attributeContainer}>
          <View style={styles.attributePartContainer}>
            <Text style={styles.attributHeader}>Author</Text>
            <Text style={styles.attributeText}>{storyData.author}</Text>
          </View>
          <View style={styles.attributePartContainer}>
            <Text style={styles.attributHeader}>Illustrator</Text>
            <Text style={styles.attributeText}>{storyData.illustrator}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {unlocked ?
            (<StartButton navigation={navigation} storyData={storyData} />)
            :
            (<LockedButton />) }
          
        </View>
        <View>

        </View>
      </View>



      <View style={styles.backButton}>
        <BackButton navigation={navigation} />
      </View>
      <View style={styles.hearthButton}>
        <HeartButton />
      </View>
    </SafeAreaView>
  )
}

export default StoryDetail
