import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import axios, { Axios } from 'axios';
import { BASE_URL } from '../../config';
import { useState } from 'react';
import { Audio } from 'expo-av'



const AudioButton = (props) => {
  const audioName = props.name;
  const audioID = props.id;
  const [sound, setSound] = useState();
  

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({uri: `${BASE_URL}/story/audio/${audioID}`});

    setSound(sound);

    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
  

  return (
    <View style={styles.container}>


      <View style={styles.textContainer}>
        <Text style={styles.text}>{audioName}</Text>
      </View>


      <TouchableOpacity style={styles.playButton} onPress={()=> {playSound()}}>
        <FontAwesomeIcon icon={faPlay} size={20} color='#ffffff' />
      </TouchableOpacity>
    </View>
  )
}

export default AudioButton