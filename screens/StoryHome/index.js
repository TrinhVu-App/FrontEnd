import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import StoryButton from '../../components/StoryButton'
import React, { useContext } from 'react'
import styles from './styles'
import ReadButton from '../../components/ReadButton'
import LibraryButton from '../../components/LibraryButton'
import StoriesForYouButton from '../../components/StoriesForYouButton'
import { useState } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import axios, { Axios } from 'axios'
import { BASE_URL } from '../../config'
import { useEffect } from 'react'
import { DEMO_STORY_DATA } from '../../DEMO_DATA'
import { DEMO_ICON_STORY } from '../../DEMO_ICON_STORY_DATA'
import MenuDropDown from '../../components/MenuDropdown'
import HambergerMenu from '../../components/HamburgerMenu'

const StoryHome = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingMenu, setIsShowingMenu] = useState(false)

 const frontPageStory = DEMO_ICON_STORY;
  
  // const getFrontPageStory = () => {
  //   setIsLoading(true);

  //   axios
  //     .get(`${BASE_URL}/story/1`)
  //     .then(res => {
  //       let data = res.data;
  //       setFrontPageStory(data);
  //       setIsLoading(false);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       setIsLoading(false);
  //     })
  // }

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setIsShowingMenu(false);
    });

    return unsubscribe;
  }, [navigation])

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.topSection}>
        <Text style={styles.header}>Today's Story</Text>
        <View style={styles.storyButton}>
          <StoryButton storyData={frontPageStory} navigation={navigation}/>
        </View>

       

      </View>
      <View style={styles.bottomSection}>
        {/* <View style={styles.storiesForYouButtonContainer}>
          <StoriesForYouButton navigation={navigation}/>
        </View> */}
        <View style={styles.readButtonContainer}>
          <ReadButton storyData={frontPageStory} navigation={navigation}/>
        </View>
        <View style={styles.libraryButtonContainer}>
          <LibraryButton navigation={navigation}/>
        </View>

        

        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/bg2.png')}
        />
       
      </View>

      <View style={styles.menuSection}>
          <HambergerMenu
            setIsShowingMenu={setIsShowingMenu}
            isShowingMenu={isShowingMenu}
            navigation={navigation}
          />

        {/* {isShowingMenu && ( */}
          <MenuDropDown isShowing={isShowingMenu} navigation={navigation} />
        {/* )} */}
        
        </View>


    </SafeAreaView>
  )
}

export default StoryHome