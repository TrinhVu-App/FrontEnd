import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { useState } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import Spinner from 'react-native-loading-spinner-overlay'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(ContextAPI);
  // const [btn, onBtnPressed] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} /> 
      <Image
        source={require('../../assets/MonkeyIcon.jpeg')}
        style={styles.image}
      />
      <Text style={styles.header}>Login with an existing account</Text>

      <TextInput
        style={styles.textInput}
        placeholder='Email...'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder='Password...'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        title='Login'
        onPress={() => { login(email, password) }}
      // onPress={() => console.log(email)}
      />
      <View style={styles.registerContainter}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
           <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default LoginScreen