import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import StoryButton from '../../components/StoryButton'
import React from 'react'
import styles from './styles'
import ReadButton from '../../components/ReadButton'
import LibraryButton from '../../components/LibraryButton'
import StoriesForYouButton from '../../components/StoriesForYouButton'

const StoryHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.header}>Today's Story</Text>
        <View style={styles.storyButton}>
          <StoryButton />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.storiesForYouButtonContainer}>
          <StoriesForYouButton />
        </View>
        <View style={styles.readButtonContainer}>
          <ReadButton />
        </View>
        <View style={styles.libraryButtonContainer}>
          <LibraryButton />
        </View>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/bg2.png')}
        />
       
      </View>

    </SafeAreaView>
  )
}

export default StoryHome