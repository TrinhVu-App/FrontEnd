import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const StoriesForYouButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
            <Image 
                style={styles.image}
                source={require('../../assets/monkeyHead3.png')}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Stories for you</Text>
            <Text style={styles.flavorText}>Truyện dành cho bạn</Text>
        </View>
    </TouchableOpacity>
  )
}

export default StoriesForYouButton