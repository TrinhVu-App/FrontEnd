import { Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import StoryButton from '../../components/StoryButton';
import styles from './styles';
import HambergerMenu from '../../components/HamburgerMenu';
import SearchButton from '../../components/SearchButton';
import BackButton from '../../components/BackButton';
import LevelFilter2 from '../../components/LevelFilter2';
import { BASE_URL, screenWidth } from '../../config';
import axios from 'axios';
import MenuDropDown from '../../components/MenuDropdown';
import { DEMO_ICON_STORY } from '../../DEMO_ICON_STORY_DATA';
import { DEMO_STORY_DATA } from '../../DEMO_DATA';

const blue = '#07B8EE';
const purple = '#A69BD0';


export default function Library({ navigation }) {
  const [storyData, setStoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingMenu, setIsShowingMenu] = useState(false)

  const getStories = () => {
    setIsLoading(true);



    axios
      .get(`${BASE_URL}/story`)
      .then(res => {
        let data = res.data;
        setStoryData([DEMO_ICON_STORY, DEMO_STORY_DATA])
        setStoryData(prevData => [...prevData, ...data]);;
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      })
  }
  useEffect(() => {
    getStories()
  }, [])

  const renderItem = ({ item }) => {
    return <StoryButton storyData={item} navigation={navigation} />
  }

  const col = Math.floor(screenWidth / 165)


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.BackButton}>
          <BackButton navigation={navigation} />
        </View>
        <Text style={styles.title}>Library</Text>

        <View style={styles.SearchButton}>
          <SearchButton />
        </View>

        <View style={styles.HamburgerMenu}>
          <HambergerMenu
            setIsShowingMenu={setIsShowingMenu}
            isShowingMenu={isShowingMenu}
            navigation={navigation}
          />
        </View>
      </View>

      <SafeAreaView style={styles.storyListContainer}>

        {isLoading ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator animating={isLoading} size={60} color={'blue'} />
          </View>
        ) : (
          <FlatList
            data={storyData}
            keyExtractor={item => item.id}
            numColumns={col}
            styles={styles.storyList}
            renderItem={
              renderItem
            }
          />)}

      </SafeAreaView>
      <View style={styles.LevelFilter}>
        <LevelFilter2 />
      </View>

      {isShowingMenu && (
        <View style={styles.menuContainer}>
          <MenuDropDown navigation={navigation} setIsShowingMenu={setIsShowingMenu} />
        </View>
      )}
    </SafeAreaView>

  )
}