import { View, Text, SafeAreaView, Image, TextInput, Button, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { useState } from 'react';
import { ContextAPI } from '../../context/ContextAPI';
import Spinner from 'react-native-loading-spinner-overlay';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const RegisterScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm()

  const pwd = watch('password')


  const { isLoading, register } = useContext(ContextAPI)

  onRegister = (data) => {
    register(navigation, data.name, data.email, data.password, data.confirm_password )
  }
  return (
    <View style={styles.container}>

      <ScrollView style={{width: "100%", height: "100%"}}>

        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/MonkeyIcon.jpeg')}
            style={styles.image}
          />
        </View>

        <View style={styles.bodyContainer}>

          {isLoading ?
            (
              <ActivityIndicator animating={isLoading} size={60} color={'blue'} />
            ) : (<>
              <Text style={styles.header}>Register new account</Text>

              <CustomInput
                name={"name"}
                lable={"Username: "}
                placeholder={"Username..."}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Username is required!"
                  },
                  minLength: {
                    value: 1,
                    message: 'Username must have more than 1 character'
                  },
                  maxLength: {
                    value: 60,
                    message: 'Username must not longer than 60 characters'
                  }
                }}
              />

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

              <CustomInput
                name={"confirm_password"}
                lable={"Confirm password: "}
                placeholder={"Confirm password..."}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Password confirmation is required!"
                  },
                  validate: value =>
                    value === pwd || 'Password confirmation does not match'
                }}
                secureTextEntry={true}
              />


              <View style={{ marginTop: 20 , height: 50, }}>
                <Button
                  title='Register'
                  onPress={handleSubmit(onRegister)}
                />
              </View>

            </>

            )}
        </View>
      </ScrollView>
    </View>
  )
}

export default RegisterScreen