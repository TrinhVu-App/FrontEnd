import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import StoryList from '../../screens/StoryList';
import StoryHome from '../../screens/StoryHome';
import StoryDetail from '../../screens/StoryDetail';
import RegisterScreen from '../../screens/RegisterScreen';
import { AuthContext, AuthProvider } from '../../context/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {userInfo.data ? (
            <>
            <Stack.Screen name="storyHome" component={StoryHome} options={{headerShown: false, orientation: 'landscape'}}/>
            <Stack.Screen name="storyDetail" component={StoryDetail} options={{headerShown: false, orientation: 'landscape'}}/>
            <Stack.Screen name="storyList" component={StoryList} options={{headerShown: false, orientation: 'landscape'}}/>
            </>
          ) : (
            <>
             <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false, orientation: 'portrait'}}/>
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false, orientation: 'portrait'}}/>
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation