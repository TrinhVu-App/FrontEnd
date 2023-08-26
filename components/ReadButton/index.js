import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const ReadButton = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style = {styles.button}> 
        <FontAwesomeIcon icon={faCircle} style={{color: "#CAD5C1", position: 'absolute'}} size={150} />
        <FontAwesomeIcon icon={faPlay} color='#fff' size={60}/>
      </TouchableOpacity>
      <Text style={styles.text}>Đọc ngay</Text>
    </SafeAreaView>
  )
}

export default ReadButton