import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { ContextAPI } from '../../context/ContextAPI';
import { useContext } from 'react';
import { BASE_URL } from '../../config';

//'../../assets/MonkeyIcon.jpeg'
const StoryButton = ({navigation, storyData}) => {
    const { storyDetailContext } = useContext(ContextAPI);

    let storyID = 420; 
    if (storyData) {
        storyID = storyData["id"];
    }
    const thumbnailID = storyData['thumbnail'];

    let thumbnail ;
    if (storyID == 420) {
        thumbnail = require('../../resource/images/Demo_Thumbnail.png');
    } else {
        thumbnail = {uri: `${BASE_URL}/story/image/${thumbnailID}`}
    }

    const setBookmarkPath = (storyData) => {
        switch(storyData.level) {
        case'A': return require("../../assets/bookmark-A.png");
        case'B': return require("../../assets/bookmark-B.png");
        case'C': return require("../../assets/bookmark-C.png");
      }}
    
      const bookmark = setBookmarkPath(storyData);

    return (
        <TouchableOpacity style={styles.container} onPress={()=> {storyDetailContext(storyData['id']); navigation.navigate('storyDetail')}}>
           
            <View style={styles.imageFrame}>
                <Image
                    source={thumbnail}
                    style={styles.img}
                />
            </View>

            <View style={styles.buttonContainer}>
                <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#07BCEB" }} size={23} />
                <Text>|</Text>
                <FontAwesomeIcon icon={faMicrophone} style={{ color: "#051fe6", }} size={21} />
            </View>
            <Image
                source={bookmark}
                style={styles.bookmark}
            />
        </TouchableOpacity>
    )
}

export default StoryButton
