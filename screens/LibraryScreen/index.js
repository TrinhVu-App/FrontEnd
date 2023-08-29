import { Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import StoryButton from '../../components/StoryButton';
import styles from './styles';
import HambergerMenu from '../../components/HamburgerMenu';
import SearchButton from '../../components/SearchButton';
import BackButton from '../../components/BackButton';
import LevelFilter2 from '../../components/LevelFilter2';
import { BASE_URL } from '../../config';
import { useContext } from 'react';
import { ContextAPI } from '../../context/ContextAPI';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

const blue = '#07B8EE';
const purple = '#A69BD0';


export default function Library({ navigation }) {
  const [storyData, setStoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getStories = () => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/story`)
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
    getStories()
  }, [])

  const renderItem = ({ item }) => {
    return <StoryButton storyData={item} navigation={navigation} />
  }



  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
    <View style={styles.banner}>
        <View style={styles.BackButton}>
          <BackButton navigation={navigation} />
        </View>
        <Text style={styles.title}>Library</Text>

        <View style={styles.SearchButton}>
          <SearchButton />
        </View>
        <View style={styles.HamburgerMenu}>
          <HambergerMenu />
        </View>
      </View>

      <SafeAreaView style={styles.storyListContainer}>
        <FlatList
          data={storyData}
          keyExtractor={item => item.id}
          numColumns={5}
          styles={styles.storyList}
          renderItem={
            renderItem
          }
        />
      </SafeAreaView>
      <View style={styles.LevelFilter}>
        <LevelFilter2 />
      </View>
    </SafeAreaView>

  )
}