import { View, Text } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
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
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking'
import * as Device from 'expo-device';
import OptionScreen from '../../screens/OptionScreen';
import StoryLoaderScreen from '../../screens/StoryLoaderScreen';
import MapScreen from '../../screens/MapScreen';


const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

const Navigation = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  // const [link, setLink ] = useState()




  const prefix = Linking.createURL('/');
  const config = {
    screens: {
      storyDetail: {
        initialRouteName: 'storyHome',
        path: 'story/:storyID',
      },
      library : {
        initialRouteName: 'storyHome',
        path: 'story/library'
      }
      // login: '*'
    }
  }

  const linking  = {
    prefixes: [prefix],
    config: config,
    async  getInitialURL() {
      // As a fallback, you may want to do the default deep link handling
      const url = await Linking.getInitialURL();
      console.log("initial url", url);
      return url;
    },
    subscribe(listener) {
      const onReceiveURL = ({ url }) => listener(url);

      // Listen to incoming links from deep linking
      const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL);

      // Listen to expo push notifications
      const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        const url = response.notification.request.content.data.url;
        // console.log("url: " + url);
        // Linking.openURL(url)

        // Any custom logic to see whether the URL needs to be handled
        //...

        // Let React Navigation handle the URL
        listener(url);
      });
      return () => {
        // Clean up the event listeners
        eventListenerSubscription.remove();
        subscription.remove();
      };
    },
  }

  // useEffect(() => {
  //   if (link !== undefined) {
  //     Linking.openURL(link)
  //     console.log("link " + link);
  //   }
  // }, [link])


  useEffect(() => {
    // registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   setNotification(notification);
    // });

    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response.notification.request.content.data.url);
    //     // Linking.openURL(response.notification.request.content.data.url)
    // });
    

    return () => {
      // Notifications.removeNotificationSubscription(notificationListener.current);
      
    };
  }, []);

  


  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator >
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name="storyHome" component={StoryHome} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name="option" component={OptionScreen} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name="map" component={MapScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name="storyDetail" component={StoryDetail} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name="library" component={StoryList} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name="storyLoader" component={StoryLoaderScreen} options={{ headerShown: false, orientation: 'landscape' }}/>
          <Stack.Screen name='storyContent' component={StoryContentScreen} options={{ headerShown: false, orientation: 'landscape' }} />
          <Stack.Screen name='listAudio' component={ListAudioScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name='addStory' component={AddStoryScreen} options={{ headerShown: false, orientation: 'portrait' }} />
          <Stack.Screen name='scoringScreen' component={ScoringScreen} options={{ headerShown: false, orientation: 'landscape' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation