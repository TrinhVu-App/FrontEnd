import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HambergerMenu = () => {
    return (
        <TouchableOpacity style={styles.container}>
           <FontAwesomeIcon icon={faBars} style={{color: "#07BCEB"}} size={25} />
        </TouchableOpacity>
    )
}

export default HambergerMenu
