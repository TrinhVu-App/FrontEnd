import { StyleSheet, View, Platform, Text, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import { ContextAPI, APIProvider } from './context/ContextAPI'
import MenuDropDown from './components/MenuDropdown';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Constants from 'expo-constants';




export default function App() {
  

  return (
        <GestureHandlerRootView style={{flex: 1}}>
          <APIProvider>
            <Navigation />
          </APIProvider>
        </GestureHandlerRootView>
      );
}


