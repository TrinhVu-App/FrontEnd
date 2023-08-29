import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackButton from '../../components/BackButton'
import styles from './styles'
import HeartButton from '../../components/HeartButton'
import { Shadow } from 'react-native-shadow-2'
import DownloadButton from '../../components/DownloadButton'
import axios from 'axios'
import { BASE_URL } from '../../config'
import { useContext } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import Spinner from 'react-native-loading-spinner-overlay'

const StoryDetail = ({navigation}) => {
  const [storyData, setStoryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { storyOfInterest } = useContext(ContextAPI);
  const getStory = () => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/story/${storyOfInterest}`)
      .then(res => {
        let data = res.data;
        setStoryData(data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getStory()
  }, [])

  
  // console.log(props.stories)
  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.storyThumbContainer}>
        <Image 
          source={require('../../assets/MonkeyIcon.jpeg')}
          style={styles.storyThumb}
        />
        <Image 
          source={require('../../assets/bookmark-A.png')}
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
              <DownloadButton />           
        </View>
        <View>

        </View>
      </View>



      <View style={styles.backButton}>
           <BackButton />
      </View>
      <View style={styles.hearthButton}>
        <HeartButton />
      </View>
    </SafeAreaView>
  )
}

export default StoryDetail
