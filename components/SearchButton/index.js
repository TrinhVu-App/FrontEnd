import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass}  style={{color: "#07BCEB"}} size={25}/>
    </TouchableOpacity>
  )
}

export default SearchButton