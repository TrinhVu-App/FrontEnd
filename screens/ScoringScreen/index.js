import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import BackButton from '../../components/BackButton'
import ConfettiCannon from 'react-native-confetti-cannon'

const ScoringScreen = ({ navigation }) => {
  const coin = require('../../assets/coin.png')
  return (
    <View style={styles.container}>
      <ConfettiCannon count={200} origin={{x: -10, y: 0}} fadeOut={true}/>
      <View style={styles.backButtonContainer}>
        <BackButton navigation={navigation} />
      </View>
      <View style={styles.header}>
        <Text style={styles.textBig}>Congratilation, you have finish the story!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.textSmall}>You earned 30 <Image source={coin} style={styles.coinIcon} resizeMode='contain' />!</Text>
      </View>

      <Image
        source={require('../../assets/confetti1.png')}
        style={styles.confetti1}
      />

      <Image
        source={require('../../assets/confetti2.png')}
        style={styles.confetti2}
      />

    </View>
  )
}

export default ScoringScreen