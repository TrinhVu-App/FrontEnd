import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { Audio } from 'expo-av';
import { AUDIO_RESOURCE } from '../../DEMO_DATA';

const wordDurations = (syncData) => {
  const result = syncData.map((wordData) => {
    return [wordData.w, (wordData.e - wordData.s)]
  })
  return result;
}

const titleHighlight = (lable, renderTitle) => {

  const hightlightTitle = renderTitle.map((word, index)=> {
    if (word.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase() == lable.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase()) {
     
      return <Text style={styles.titleWordHightlight} key={index}>{word} </Text>
    }
    else {
      return (word+" ")
    }
  })
  const result = <Text style={styles.titleWord}>{hightlightTitle}</Text>
  return result;
}

const PageTitle = (props) => {
  const [sound, setSound] = useState();
  const [isSyncText, setIsSyncText] = useState();
  const [syncTitle, setSyncTitle] = useState()

  const pageTitle = props.pageTitle;
  const lable = props.lable;
  const isShowingLable = props.isShowingLable;
  const syncData = props.syncData;
  const titleAudio = props.titleAudio;

  const titleArray = pageTitle.split(" ");
  const titleArrayFix = titleArray.map((word)=> {
      return (word+" ")
    }
  )
  let title = <Text style={styles.titleWord}>{titleArrayFix}</Text>
  
  if (isShowingLable) {
    title = titleHighlight(lable, titleArray)
  }

  const audio = AUDIO_RESOURCE[titleAudio]
  async function playSound(audio) {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const titleSyncData = wordDurations(syncData);
  let timeoutID ;

  useEffect(() => {
    playSound(audio);
    let timer = 0;
    for(let i = 0; i<=titleSyncData.length; i++) {
      setIsSyncText(true)
      timeoutID = setTimeout(()=> {
        if(i < titleSyncData.length) {
        setSyncTitle(titleHighlight(titleSyncData[i][0], titleArray))
        }      
        else {
          setIsSyncText(false)
        }
      }
      , timer)
      if(i<titleSyncData.length){
           timer = timer + titleSyncData[i][1];
      } else {
        timer = timer + titleSyncData[i-1][1];
      }
    }
  }, [])


  return (
    <View style={styles.pageTitle}>
      {isSyncText ? (syncTitle) : (title)}
    </View>
  )
}

export default PageTitle