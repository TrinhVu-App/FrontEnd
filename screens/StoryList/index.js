import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import StoryButton from '../../components/StoryButton';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';
import {Dimensions} from 'react-native';
import styles from './styles';
import HambergerMenu from '../../components/HamburgerMenu';
import SearchButton from '../../components/SearchButton';
import BackButton from '../../components/BackButton';
import LevelFilter2 from '../../components/LevelFilter2';
import { BASE_URL } from '../../config';

const blue = '#07B8EE';
const purple = '#A69BD0';


export default function StoryList() {  
  const [storyData, setStoryData] = useState([]);

  const getStories = () => {fetch(BASE_URL + '/story')
                    .then(response => response.json())
                    .then(result => setStoryData(result))
                    .catch(e => console.log(e))} 

  useEffect(() => {
    getStories()
  }, [])
  
  const renderItem = ({ item }) => {
    return <StoryButton name={item.storyName}/>
  }



  return (
  <SafeAreaView style={styles.container}>
    
    <View style = {styles.banner}>
      <View style={styles.BackButton}>
        <BackButton />
      </View>
      <Text style={styles.title}>Library</Text>
      
      <View style={styles.SearchButton}>
        <SearchButton />
      </View>
      <View style={styles.HamburgerMenu}>
        <HambergerMenu />
      </View>
    </View>
    
    <SafeAreaView style={ styles.storyListContainer}>
      <FlatList
        data = {storyData}
        keyExtractor = {item => item.id}
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