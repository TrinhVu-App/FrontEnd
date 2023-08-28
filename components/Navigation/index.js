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
          {userInfo.data.token ? (
            <>
            <Stack.Screen name="storyHome" component={StoryHome} options={{headerShown: false}}/>
            <Stack.Screen name="storyDetail" component={StoryDetail} options={{headerShown: false}}/>
            <Stack.Screen name="storyList" component={StoryList} options={{headerShown: false}}/>
            </>
          ) : (
            <>
             <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}}/>
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation