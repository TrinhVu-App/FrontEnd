import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import BackButton from '../../components/BackButton'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook, faFileAudio, faMapLocationDot, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { screenHeight, screenWidth } from '../../config'

const OptionScreen = ({ navigation }) => {
    const addStoryX = useSharedValue(0)
    const addStoryY = useSharedValue(0)

    const audioX = useSharedValue(screenWidth)
    const audioY = useSharedValue(screenHeight)

    const mapY = useSharedValue(screenHeight / 2)
    const mapX = useSharedValue(600)

    const addStoryAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: addStoryX.value },
            { translateY: addStoryY.value },
        ]
    }))

    const audioAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: audioX.value },
            { translateY: audioY.value },
        ]
    }))

    const mapAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: mapX.value },
            { translateY: mapY.value },
        ]
    }))

    const addStoryHandler = () => {
        navigation.navigate("addStory")
    }

    const audioHandler = () => {
        navigation.navigate("listAudio")
    }

    const mapHandler = () => {
        navigation.navigate('map')
    }

    useEffect(() => {

       
        const getIn = navigation.addListener('focus', () => {
            addStoryX.value = withDelay(100, withSpring(190, { damping: 20 }))
            addStoryY.value = withDelay(100, withSpring(55, { damping: 20 }))
            audioX.value = withDelay(100, withSpring(190, { damping: 20 }))
            audioY.value = withDelay(100, withSpring(60, { damping: 20 }))
            mapX.value = withDelay(100, withSpring(495, { damping: 20 }))
            mapY.value = withDelay(100, withSpring(-95, { damping: 20 }))

        });
        const getOut = navigation.addListener('blur', () => {
            addStoryX.value = withSpring(-200, { damping: 20 })
            addStoryY.value = withSpring(-200, { damping: 20 })
            audioX.value = withSpring(screenWidth, { damping: 20 })
            audioY.value = withSpring(screenHeight, { damping: 20 })
            mapX.value = withDelay(100, withSpring(1000, { damping: 20 }))
            // mapY.value = withDelay(100, withSpring(0, { damping: 20 }))
        });

        return
        getOut;
        getIn;
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.backButtonContainer}>
                    <BackButton navigation={navigation} />
                </View>

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Options</Text>
                </View>

            </View>
            <View style={styles.bodyContainer}>
                <Animated.View style={[styles.buttonContainer, addStoryAnimatedStyles]}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={addStoryHandler}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faBook} size={30} color='white' />
                            <FontAwesomeIcon icon={faPlus} size={30} color='white' />
                        </View>
                        <Text style={styles.buttonText}>Add a new story</Text>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View style={[styles.buttonContainer, audioAnimatedStyles]}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={audioHandler}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faFileAudio} size={30} color='white' />
                        </View>
                        <Text style={styles.buttonText}>View the list of all the audios</Text>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View style={[styles.mapButtonContainer, mapAnimatedStyles]}>
                    <TouchableOpacity style={[styles.mapButtonTouchable]} onPress={mapHandler}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faMapLocationDot} size={30} color='white' />
                        </View>
                        <Text style={styles.buttonText}>View the winary map</Text>
                    </TouchableOpacity>

                </Animated.View>
            </View>
        </View>
    )
}

export default OptionScreen