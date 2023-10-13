import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles';
import { Audio } from 'expo-av';
import { AUDIO_RESOURCE, DEMO_PAGE_DATA_2 } from '../../DEMO_DATA';
import { ICON_STORY_AUDIO_RESOURCE } from '../../DEMO_ICON_STORY_DATA';

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

const checkHighlight = (lable, pageTitle) => {
  let result = <Text style={styles.titleWord}>{pageTitle}</Text>

  const highlightStartPos = pageTitle.toUpperCase().indexOf(lable.toUpperCase());

  if (highlightStartPos !== -1) {
    const highlightEndPos = highlightStartPos + lable.length;
    const titleHead = pageTitle.substring(0, highlightStartPos);
    const titleTail = pageTitle.substring(highlightEndPos, pageTitle.length);
    const titleHighlight = pageTitle.substring(highlightStartPos, highlightEndPos)

    const highlight = <Text style={styles.titleWordHightlight}>{titleHighlight}</Text>
    result = <Text style={styles.titleWord}>{titleHead}{highlight}{titleTail}</Text>
  }



  return result;
}

const intervalHighlighter = (syncData, timer, titleSentence) => {
  let result = <Text style={styles.titleWord}>{titleSentence}</Text>
  result = syncData.map((word, index) => {
    if (timer == word.s) {
      return <Text key={index} style={[styles.titleWord, styles.titleWordHightlight]}>{word.w} </Text>
    }
    else {
      return <Text key={index} style={styles.titleWord}>{word.w} </Text>
    }
  })

  return result
}


const PageTitle = (props) => {
  //declear some states
  const [sound, setSound] = useState();
  const [syncTitle, setSyncTitle] = useState()
  const timingID = useRef();


  //getting title data from props
  const pageTitles = props.pageTitle;
  const lable = props.lable;
  const isShowingLable = props.isShowingLable;
  const syncDatas = props.syncData;
  const titleAudios = props.titleAudio;
  const audioDurations = props.titleAudioDuration;
  const type = props.type;
  // function changeIsSyncText() = props.changeIsSyncText;

  let audioSource;
  if (type == 0) {
    audioSource = AUDIO_RESOURCE
  }
  if (type == 1) {
    audioSource = ICON_STORY_AUDIO_RESOURCE
  }

  //split title Strings into arrays 
  let titleArrays = pageTitles.map((titleSentence) => {
    return titleSentence.split(" ");
  })

  const audios = titleAudios.map((titleAudio) => {
    return audioSource[titleAudio]
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
    let timer = 0;
    let audioTimer = 0;
    let highlightIndex;
    let currentSentence = 0;
    let timerID;

    clearInterval(timingID.current)
    setTimeout(()=>{
      for (let a = 0; a < audios.length; a++) {
        setTimeout(() => {
          // timingIDs.current = [... timingIDs.current, timerID ]
          playSound(audios[a]);
          // console.log(a);
        }, audioTimer)
        audioTimer = audioTimer + audioDurations[a] + 300;
      }
  
      // for (let j = 0; j < syncDatas.length; j++) {
  
      clearInterval(timingID.current)
      try {
        timerID = setInterval(() => {
  
          if (timer == 0) {
            timingID.current = timerID
          }         
  
  
          if (timer > audioDurations[currentSentence] && currentSentence < syncDatas.length) {
            timer = 0;
            currentSentence = currentSentence + 1;
          }
  
          if (timer > audioDurations[currentSentence] || currentSentence >= syncDatas.length) {
            setSyncTitle(intervalHighlighter(syncDatas[currentSentence-1], -1, pageTitles[currentSentence-1]));
            console.log("clear timer");
            clearInterval(timerID)
          }
  
          
  
  
          if (currentSentence < syncDatas.length) {
            for (let i = 0; i < syncDatas[currentSentence].length; i++) {
              let word = syncDatas[currentSentence][i];
              if (word.s <= timer && timer < word.e && highlightIndex != i) {
                highlightIndex = i;
                setSyncTitle(intervalHighlighter(syncDatas[currentSentence], word.s, pageTitles[currentSentence]));
              }
            }
          }
  
  
          timer = timer + 100
        }, 100)
      } catch (e) {
        console.log(e.message);
      }
    }, 500)
    
  }, [pageTitles])

  useEffect(() => {
    if (isShowingLable) {
      title = pageTitles.map((pageTitle) => {
        return checkHighlight(lable, pageTitle);
      })
      setSyncTitle(title[title.length - 1])
    } else {
      title = pageTitles.map((pageTitle) => {
        return checkHighlight('', pageTitle);
      })
      setSyncTitle(title[title.length - 1])
    }

  }, [isShowingLable, lable, pageTitles])


  return (
    <View style={styles.pageTitle}>
      {syncTitle}
    </View>
  )
}

export default PageTitle