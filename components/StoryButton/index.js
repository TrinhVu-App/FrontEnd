import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

//'../../assets/MonkeyIcon.jpeg'
const StoryButton = (props) => {
    // const path = props.image;
    const path = '../../assets/MonkeyIcon.jpeg';
    const name = props.name;
    return (
        <TouchableOpacity style={styles.container}>
           
            <View style={styles.imageFrame}>
                <Image
                    source={require(path)}
                    style={styles.img}
                />
            </View>

            <View style={styles.buttonContainer}>
                <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#07BCEB" }} size={23} />
                <Text>|</Text>
                <FontAwesomeIcon icon={faMicrophone} style={{ color: "#051fe6", }} size={21} />
            </View>
            <Image
                source={require('../../assets/bookmark-A.png')}
                style={styles.bookmark}
            />
        </TouchableOpacity>
    )
}

export default StoryButton
