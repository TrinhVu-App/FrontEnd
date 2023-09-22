import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HambergerMenu = ({setIsShowingMenu, isShowingMenu}) => {
    const menuToggler = () => {
        if (!isShowingMenu) {
            setIsShowingMenu(true);
        } else {
            setIsShowingMenu(false)
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={menuToggler}>
           <FontAwesomeIcon icon={faBars} style={{color: "#07BCEB"}} size={25} />
        </TouchableOpacity>
    )
}

export default HambergerMenu
