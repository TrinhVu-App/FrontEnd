import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const StartButton = (props) => {
    const navigation = props.navigation
    const storyData = props.storyData
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=> {
                    // if (storyData.type == 0) {
                       navigation.navigate("pageView", {"storyData": storyData}) 
                    // }
                    // if (storyData.type == 1) {
                    //     navigation.navigate("iconPageView", {"storyData": storyData})
                    // }
                }}>
                <FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", position: 'absolute' }} size={135} />
                <FontAwesomeIcon icon={faPlay} color='#fff' size={60}/>
            </TouchableOpacity>
            <Text style={styles.downloadText}>Start</Text>
        </View>

    )
}

export default StartButton