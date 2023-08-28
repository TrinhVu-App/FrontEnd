import { View, Text, SafeAreaView, Image, TextInput, Button, Alert } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { useState } from 'react';
import { ContextAPI } from '../../context/ContextAPI';
import Spinner from 'react-native-loading-spinner-overlay';

const RegisterScreen = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password_confirmation, setPassword_confirmation] = useState(null);
    const [name, setName] = useState(null)
 
    const {isLoading, register} = useContext(ContextAPI)
    return (
        <SafeAreaView style={styles.container}>
            <Spinner visible={isLoading}/>
            <Image
                source={require('../../assets/MonkeyIcon.jpeg')}
                style={styles.image}
            />
            <Text style={styles.header}>Register new account</Text>
            <TextInput 
                style={styles.textInput}
                placeholder='Your name...'
                value={name}
                onChangeText={(text) => setName(text)}
            />
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

            <TextInput
                style={styles.textInput}
                placeholder='Confirm password...'
                value={password_confirmation}
                onChangeText={(text) => setPassword_confirmation(text)}
            />

            <Button
                title='Register'
                onPress={() => {
                    register(name, email, password, password_confirmation)
                }}
            />
        </SafeAreaView>
    )
}

export default RegisterScreen