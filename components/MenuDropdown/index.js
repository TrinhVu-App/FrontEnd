import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { faPlus, faRightFromBracket, faFileAudio } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useContext } from 'react'
import { ContextAPI } from '../../context/ContextAPI'

const MenuDropDown = (props) => {
    const {logout} = useContext(ContextAPI);
    const navigation = props.navigation;

    const listAudioButtonHandler = () => {
      props.setIsShowingMenu(false);
      navigation.navigate("listAudio")
    }
    const addStoryButtonHandler = () => {
        props.setIsShowingMenu(false);
        navigation.navigate("addStory")
    }
    const logoutButtonHandler = () => {
        logout();
    }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={listAudioButtonHandler}>
      <FontAwesomeIcon icon={faFileAudio} size={40} color='#ffffff' />
      </TouchableOpacity>

      <TouchableOpacity onPress={addStoryButtonHandler}>
        <FontAwesomeIcon icon={faPlus} size={40} color='#ffffff'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={logoutButtonHandler}>
        <FontAwesomeIcon icon={faRightFromBracket} size={40} color='#ffffff'/>
      </TouchableOpacity>
    </View>
  )
}

export default MenuDropDown