import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import BackButton from '../../components/BackButton'
import styles from './styles'
import HeartButton from '../../components/HeartButton'
import { Shadow } from 'react-native-shadow-2'
import DownloadButton from '../../components/DownloadButton'

const StoryDetail = () => {
  // console.log(props.stories)
  return (
    <SafeAreaView style={styles.container}>
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
           <Text style={styles.title}>Story name</Text>
        </View>
        <View style={styles.attributeContainer}>
            <View style={styles.attributePartContainer}>
              <Text style={styles.attributHeader}>Author</Text>
              <Text style={styles.attributeText}>Hekig Jef</Text>
            </View>
            <View style={styles.attributePartContainer}>
              <Text style={styles.attributHeader}>Illustrator</Text>
              <Text style={styles.attributeText}>Huckig Dave</Text>
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
