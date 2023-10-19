import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { faPlus, faRightFromBracket, faFileAudio, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useContext } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const MenuDropDown = ({ navigation, isShowing, }) => {
  const { logout } = useContext(ContextAPI);
  const [isVisible, setIsVisible] = useState(false)

  const optionButtonHander = () => {
    navigation.navigate("option")
  }
  const logoutButtonHandler = () => {
    logout(navigation);
  }



  const height = useSharedValue(0)

  useEffect(() => {
    if (isShowing) {
      setIsVisible(true)
      height.value = withSpring(175)
    } else {
      height.value = withTiming(0, { duration: 200 }, setIsVisible(false))
    }

  }, [isShowing])


  return (
    <Animated.View
      style={[styles.container, {
        height: height
      },]}
    >
      {isVisible &&
        (<>
          <TouchableOpacity onPress={optionButtonHander}>
            <FontAwesomeIcon icon={faGear} size={40} color='#ffffff' />
          </TouchableOpacity>

          <TouchableOpacity onPress={logoutButtonHandler}>
            <FontAwesomeIcon icon={faRightFromBracket} size={40} color='#ffffff' />
          </TouchableOpacity>

        </>)
      }
    </Animated.View>
  )
}

export default MenuDropDown