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


const PageTitle = (props) => {
  //declear some states
  const [sound, setSound] = useState();
  const [syncTitle, setSyncTitle] = useState()

  //getting title data from props
  const pageTitles = props.pageTitle;
  const lable = props.lable;
  const isShowingLable = props.isShowingLable;
  const syncDatas = props.syncData;
  const titleAudios = props.titleAudio;
  const audioDurations = props.titleAudioDuration;
  // function changeIsSyncText() = props.changeIsSyncText;

  //split title Strings into arrays 
  let titleArrays = pageTitles.map((titleSentence) => {
    return titleSentence.split(" ");
  })

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
    let timer = 0;
    let audioTimer = 0;

    titleArrays = pageTitles.map((titleSentence) => {
      return titleSentence.split(" ");
    })

    for (let a = 0; a < audios.length; a++) {
      setTimeout(() => {
        playSound(audios[a]);
        // console.log(a);
      }, audioTimer)
      audioTimer = audioTimer + audioDurations[a] + 300;
    }

    //start sync title
    for (let j = 0; j < titleSyncDatas.length; j++) {
      //sync title while audio is playing
      for (let i = 0; i <= titleSyncDatas[j].length; i++) {
        // setIsSyncText(true)
        props.changeIsSyncText(true)
        // console.log(titleSyncDatas[j])
        setTimeout(() => {
          if (i < titleSyncDatas[j].length) {
            setSyncTitle(titleHighlight(titleSyncDatas[j][i][0], titleArrays[j]))
            // setSyncTitle(checkHighlight(titleSyncDatas[j][i][0], pageTitles[j]))
          }
          else if (j == titleSyncDatas.length - 1) {
            setSyncTitle(title[j]);
            // setIsSyncText(false);
            props.changeIsSyncText(false)
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

  }, [isShowingLable, pageTitles])


  return (
    <View style={styles.pageTitle}>
      {syncTitle}
    </View>
  )
}

export default PageTitle