import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import BackButton from '../BackButton';

const PotraitHeader = (props) => {
    const navigation = props.navigation;
    const headerText = props.headerText;
  return (
    <View style={styles.headerBar}>
    <BackButton navigation={navigation} />
    <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
    </View>
</View>
  )
}

export default PotraitHeader