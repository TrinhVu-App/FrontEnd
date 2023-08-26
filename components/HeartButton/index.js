import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const HeartButton = () => {
  return (
    <TouchableOpacity>
        <FontAwesomeIcon icon={faHeart} style={{color: "#5a5d63"}}size={40}/>
    </TouchableOpacity>
  )
}

export default HeartButton