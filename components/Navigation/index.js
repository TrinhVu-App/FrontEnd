import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import StoryList from '../../screens/LibraryScreen';
import StoryHome from '../../screens/StoryHome';
import StoryDetail from '../../screens/StoryDetail';
import RegisterScreen from '../../screens/RegisterScreen';
import { ContextAPI, APIProvider } from '../../context/ContextAPI';
// import IconStoryPageView from '../../screens/IconStoryPageView'
import StoryContentScreen from '../../screens/StoryContentScreen';
import ScoringScreen from '../../screens/ScoringScreen';
import ListAudioScreen from '../../screens/ListAudioScreen';
import AddStoryScreen from '../../screens/AddStoryScreen';
import { set } from 'react-hook-form';

const Stack = createNativeStackNavigator();

const Navigation = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator >
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name="storyHome" component={StoryHome} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name="storyDetail" component={StoryDetail} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name="library" component={StoryList} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name='storyContent' component={StoryContentScreen} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name='listAudio' component={ListAudioScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name='addStory' component={AddStoryScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name='scoringScreen' component={ScoringScreen} options={{ headerShown: false, orientation: 'landscape' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation