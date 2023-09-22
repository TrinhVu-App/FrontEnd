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

const checkHighlight = (syncDatas, pageTitle, syncTextTimer) => {
    let result = <Text style={styles.titleWord}>{pageTitle}</Text>
    syncDatas.forEach((syncData) => {
        if (syncTextTimer <= syncData.s && syncTextTimer >= syncData.e) {
            const highlightStartPos = pageTitle.indexOf(syncData.w);
            const highlightEndPos = highlightStartPos + syncData.w.length;
            const titleHead = pageTitle.substring(0, highlightStartPos);
            const titleTail = pageTitle.substring(highlightEndPos, pageTitle.length);

            const highlight = <Text style={styles.titleWordHightlight}>{syncData.w}</Text>
            result = <Text style={styles.titleWord}>{titleHead}{highlight}{titleTail}</Text>
        }
    });
    return result;
}


const PageTitle2 = (props) => {
    //declear some states
    const [sound, setSound] = useState();
    const [syncTitle, setSyncTitle] = useState();
    const [syncTextTimer, setSyncTextTimer] = useState(0);

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
        let intervalID;
        let audioTimer;

        for (let a = 0; a < audios.length; a++) {
            setTimeout(() => {
                playSound(audios[a]);
                // console.log(a);
            }, audioTimer)
            audioTimer = audioTimer + audioDurations[a] + 300;
        }
        
        for (let i = 0; i < pageTitles.length; i++) {
            playSound(titleAudios[i]);
            intervalID = setInterval(() => {
                if (syncTextTimer < audioDurations[i]) {
                    setSyncTextTimer(syncTextTimer + 10);
                    setSyncTitle(checkHighlight(syncDatas[i], pageTitles[i], syncTextTimer))
                }
                if (syncTextTimer == audioDurations[i]) {
                    setSyncTextTimer(0)
                    clearInterval(intervalID);
                    intervalID = null;
                }
            }, 10)
        }


    }, [pageTitles])


    return (
        <View style={styles.pageTitle}>
            {syncTitle}
        </View>
    )
}

export default PageTitle2