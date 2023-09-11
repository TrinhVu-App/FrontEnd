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
  const result = renderTitle.map((word, index) => {
    if (word.props.id.toUpperCase() === lable.toUpperCase()) {
      
      return (
        <Text
          id={word.props.id}
          style={styles.titleWordHightlight}
          key={index}
        >{word.props.children}</Text>)
    } else {
      return word
    }
  })
  return result;
}
async function titleSync(lable, renderTitle) {
  const result = renderTitle.map((word, index) => {
    if (word.props.children[0].toUpperCase() === lable.toUpperCase()) {
      return (
        <Text
          id={word.props.id}
          style={styles.titleWordHightlight}
          key={index}
        >{word.props.children}</Text>)
    } else {
      return word
    }
  })
  return result;
}


const PageTitle = (props) => {
  const [sound, setSound] = useState();
  const [isFinish, setIsFinish] = useState(false);

  const pageTitle = props.pageTitle;
  const lable = props.lable;
  const isShowingLable = props.isShowingLable;
  const syncData = props.syncData;
  const titleAudio = props.titleAudio;
  
  const titleArray = pageTitle.split(" ");
  const renderTitle = titleArray.map((word, index) =>
    <Text
      id={word.replace(/[^a-zA-Z0-9 ]/g, '')}
      style={styles.titleWord}
      key={index}
    >{word} </Text>)

  let title = renderTitle;
  if (isShowingLable) {
    title = titleHighlight(lable, renderTitle)
  }

  const audio = AUDIO_RESOURCE[titleAudio]
  async function playSound(audio) {
    // console.log('Loading Title Sound');
    const { sound } = await Audio.Sound.createAsync(audio);

    setSound(sound);

    // console.log('Playing Title Sound!');
    await sound.playAsync()
   

  }


  useEffect(() => {
    return sound
      ? () => {
        // console.log('Unloading Title Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const titleSyncData = wordDurations(syncData);
  useEffect(() => {
    playSound(audio);
   
    
    let timer = 0;
    let isFinish = false
    for(let i = 0; i<titleSyncData.length; i++) {
      setTimeout(()=> {
        if (i>0) {
          console.log(titleSyncData[i-1][0]+ ".")
        }
      console.log(titleSyncData[i][0]+ "^");
      if (i == titleSyncData.length-1){
        setIsFinish(true)
      }
      }, timer)
      timer = timer + titleSyncData[i][1];
    }
   
  }, [])

  // console.log(title);

  if(isFinish) {
    console.log(titleSyncData[titleSyncData.length-1][0]+ ".");
  }

  return (
    <View style={styles.pageTitle}>
      {title}
    </View>
  )
}

export default PageTitle