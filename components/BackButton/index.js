import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} size= {25} style={{color: "#07BCEB",}} />
    </TouchableOpacity>
  )
}

export default BackButton