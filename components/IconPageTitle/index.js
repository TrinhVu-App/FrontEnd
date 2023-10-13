import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles';
import { Audio } from 'expo-av';
import { AUDIO_RESOURCE, DEMO_PAGE_DATA_2 } from '../../DEMO_DATA';
import Icon from '../Icon';
import { Fragment } from 'react';
import { ICON_STORY_AUDIO_RESOURCE } from '../../DEMO_ICON_STORY_DATA';
import { useContext } from 'react';
import { ContextAPI } from '../../context/ContextAPI';
import { Sound } from 'expo-av/build/Audio';
import { useFocusEffect } from '@react-navigation/native';


const iconReplacer = (title, sync_Data, icons, timer, isSyncText) => {
    let result = <Text style={styles.titleWord}>{title}</Text>;
    result = sync_Data.map((word, index) => {
        let highlight = false;
        if (timer == word.s) {
            highlight = true;
        }
        if (word.i == 1) {
            const iconData = icons.find(({ name }) => name.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase() === word.w.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase());
            if (highlight) {
                return (
                    <Icon
                        isSyncText={isSyncText}
                        key={index}
                        imageID={iconData["imageID"]}
                        h={iconData["height"]}
                        w={iconData["width"]}
                        text={iconData["name"]}
                        highlight={true}
                        word={word.w}
                        audioID={iconData["audioID"]}
                    />
                )

            }
            else {
                return (
                    <Icon
                        isSyncText={isSyncText}
                        key={index}
                        imageID={iconData["imageID"]}
                        h={iconData["height"]}
                        w={iconData["width"]}
                        text={iconData["name"]}
                        word={word.w}
                        audioID={iconData["audioID"]}
                    />
                )
            }
        }
        else {
            if (highlight) {
                return <Text key={index} style={[styles.titleWord, styles.titleWordHightlight]}>{word.w} </Text>
            } else {
                return <Text key={index} style={styles.titleWord}>{word.w} </Text>
            }
        }
    })

    return result;
}


const IconPageTitle = ({ title, audio, audioDuration, sync_data, icons, pageID }) => {
    //declear some states
    const [displayTitle, setDisplayTitle] = useState();
    const [sound, setSound] = useState()
    const timingID = useRef();

    const pageAudio = ICON_STORY_AUDIO_RESOURCE[audio];

    async function playSound(audio) {
        const { sound } = await Audio.Sound.createAsync(audio);
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

    let timer = 0;
    let timerID ;
    let highlightIndex;

    useEffect(() => {
        //play audio also HERE
        playSound(pageAudio)
  
        setDisplayTitle(iconReplacer(title, sync_data, icons, -1, false))
        clearInterval(timingID.current)
            timerID = setInterval(() => {
            timingID.current=timerID

            if (timer > audioDuration[0]) {
                setDisplayTitle(iconReplacer(title, sync_data, icons, -1, false))
                // console.log(timer)
                console.log('clear  timer ' + timerID);
                clearInterval(timerID)            
            }

            if((timer % 2000) == 0) {
                console.log(`timer ${timerID} still running`);
            }

            sync_data.forEach((word, index) => {
                if (word.s <= timer && timer < word.e && highlightIndex!= index) {
                    highlightIndex = index;
                    setDisplayTitle(iconReplacer(title, sync_data, icons, word.s, true))
                }
            });
            timer = timer + 200
        }, 200)
        // setTimingID(prevTimingID => [...prevTimingID, timerID])


        console.log("TimerID: " + timerID);
        // }
        

    }, [title])

    useEffect(() => {
        return ()=> {
            clearInterval(timingID.current);
            console.log("Clean up");
        }
    }, [])


    return (
        <View style={styles.container}>
            {displayTitle}
        </View>
    )
}

export default IconPageTitle