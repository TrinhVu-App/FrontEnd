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

const StoryDetail = ({navigation}) => {
  const [storyData, setStoryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { storyOfInterest } = useContext(ContextAPI);
  const [img , setImg] = useState()

  const getStory = () => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/story/${storyOfInterest}`)
      .then(res => {
        let data = res.data;
        setStoryData(()=> {
            const temp = data;
            setImg({uri: `${BASE_URL}/story/image/${data.thumbnail}`})
          return data
        });
        
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    if(storyOfInterest == 420) {
      setStoryData(DEMO_STORY_DATA);
      setImg(require('../../resource/images/Demo_Thumbnail.png'))
    } else {
      getStory();
     
    }
  }, [])

  // useEffect(()=> {
  //   console.log("tf: " +img);
  // }, [img])

  let image = img; 

  const setBookmarkPath = (storyData) => {
    switch(storyData.level) {
    case'A': return require("../../assets/bookmark-A.png");
    case'B': return require("../../assets/bookmark-B.png");
    case'C': return require("../../assets/bookmark-C.png");
  }}

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
              <StartButton navigation={navigation}/>           
        </View>
        <View>

        </View>
      </View>



      <View style={styles.backButton}>
           <BackButton navigation={navigation}/>
      </View>
      <View style={styles.hearthButton}>
        <HeartButton />
      </View>
    </SafeAreaView>
  )
}

export default StoryDetail
