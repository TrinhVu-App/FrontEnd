import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

const LibraryButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.textZone}>
            <Text style={styles.buttonText}>Library</Text>
            <Text style={styles.flavorText}>Khám phá tự do</Text>
        </View>
        
        <View style={styles.imageContainer}>
            <Image 
                style={styles.image}
                source={require('../../assets/monkeyHead.png')}
            />
        </View>
    </TouchableOpacity>
  )
}

export default LibraryButton

