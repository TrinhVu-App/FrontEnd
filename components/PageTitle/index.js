import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { Audio } from 'expo-av';
import { AUDIO_RESOURCE, DEMO_PAGE_DATA_2 } from '../../DEMO_DATA';

const wordDurations = (syncData) => {
  const result = syncData.map((wordData) => {
    return [wordData.w, (wordData.e - wordData.s)]
  })
  return result;
}

const titleHighlight = (lable, renderTitle) => {

  const hightlightTitle = renderTitle.map((word, index) => {
    if (word.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase() == lable.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase()) {

      return <Text style={styles.titleWordHightlight} key={index}>{word} </Text>
    }
    else {
      return (word + " ")
    }
  })
  const result = <Text style={styles.titleWord}>{hightlightTitle}</Text>
  return result;
}

const PageTitle = (props) => {
  //declear some states
  const [sound, setSound] = useState();
  const [isSyncText, setIsSyncText] = useState();
  const [syncTitle, setSyncTitle] = useState()

  //getting title data from props
  const pageTitles = props.pageTitle;
  const lable = props.lable;
  const isShowingLable = props.isShowingLable;
  const syncDatas = props.syncData;
  const titleAudios = props.titleAudio;
  const audioDurations = props.titleAudioDuration;

  //split title Strings into arrays 
  const titleArrays = pageTitles.map((titleSentence) => {
    return titleSentence.split(" ");
  })

  const titleArraysFix = titleArrays.map((titleSentenceFix) => {
    return titleSentenceFix.map((word) => {
      return (word + " ")
    })
  })

  let title = titleArraysFix.map((titleArrayFix, index) => {
    return <Text key={index} style={styles.titleWord}>{titleArrayFix}</Text>
  })

  if (isShowingLable) {
    title = titleArrays.map((titleArray) => {
      return titleHighlight(lable, titleArray)
    })
  }

  const audios = titleAudios.map((titleAudio) => {
    return AUDIO_RESOURCE[titleAudio]
  })
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

  const titleSyncDatas = syncDatas.map((syncData) => {
    return wordDurations(syncData);
  })

  useEffect(() => {
    // const tf = <Text> TF </Text>
    // setSyncTitle(tf)
    // console.log(syncTitle+ "==============================");
    //set timer for setTimeOut
    let timer = 0;
    let audioTimer = 0;

    for (let a = 0; a < audios.length; a++) {
      setTimeout(() => {
        playSound(audios[a]);
        // console.log(a);
      }, audioTimer)
      audioTimer = audioTimer + audioDurations[a];
    }

    //start sync title
    for (let j = 0; j < titleSyncDatas.length; j++) {
      //sync title while audio is playing
      for (let i = 0; i <= titleSyncDatas[j].length; i++) {
        setIsSyncText(true)
        // console.log(titleSyncDatas[j])
        setTimeout(() => {
          if (i < titleSyncDatas[j].length) {
            setSyncTitle(titleHighlight(titleSyncDatas[j][i][0], titleArrays[j]))
          }
          else if (j == titleSyncDatas.length-1) {
            setSyncTitle(title[j])
            // console.log("----" + title[j]);
          }
          else {
            setSyncTitle([])
          }
        }
          , timer)
        if (i < titleSyncDatas[j].length) {
          timer = timer + titleSyncDatas[j][i][1];
        } else {
          timer = timer + titleSyncDatas[j][i - 1][1];
        }
      }

      // console.log("Text timeout: " + timer);
    }



  }, [])


  return (
    <View style={styles.pageTitle}>
      {/* {isSyncText ? (syncTitle) : (title)} */}
      {syncTitle}
      {/* <Text style={styles.titleWord}>Some title here</Text> */}
    </View>
  )
}

export default PageTitle