import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import styles from './styles'
import { useState } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import Spinner from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomInput from '../../components/CustomInput'
import { useForm } from 'react-hook-form'


const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm()

  const { login, userInfo, isLoading } = useContext(ContextAPI);




  useEffect(() => {
    console.log(userInfo);
    if (userInfo != null) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'storyHome' }],
      })
    }
  }, [userInfo])

  onLogin = (data) => {
    login(data.email, data.password)
  }




  return (


    <SafeAreaView style={styles.container}>

      <ScrollView style={{width: "100%", height: "100%"}}>

      
      <Image
        source={require('../../assets/MonkeyIcon.jpeg')}
        style={styles.image}
      />

      <View style={{ flex: 6, width: "100%", paddingHorizontal: 30 }}>
        {isLoading ?
          (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <ActivityIndicator animating={isLoading} size={60} color={'blue'} />
            </View>

          ) : (
            <>
              <Text style={styles.header}>Login with an existing account</Text>
              <CustomInput
                name={"email"}
                lable={"Email: "}
                placeholder={"Email..."}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required!'
                  },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Invalid Email'
                  },
                }}
              />

              <CustomInput
                name={"password"}
                lable={"Password: "}
                placeholder={"Password..."}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Password is required!"
                  },
                  minLength: {
                    value: 8,
                    message: 'Password must have more than 8 character'
                  },
                  maxLength: {
                    value: 60,
                    message: 'Password must not longer than 60 characters'
                  }
                }}
                secureTextEntry={true}
              />

              <View style={{ marginTop: 20 , height: 50, }}>
                <Button
                  title='Login'
                  onPress={handleSubmit(onLogin)}
                // onPress={() => console.log(email)}
                />
              </View>
              <View style={styles.registerContainter}>
                <Text style={styles.registerText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                  <Text style={styles.registerLink}>Register</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
      </View>



      </ScrollView>
    </SafeAreaView>

  )
}

export default LoginScreen