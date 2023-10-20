import { Text, View, TextInput, Button, Alert, Pressable, Image, ScrollView, KeyboardAvoidingView, ActivityIndicator } from "react-native"
import React, { useState } from 'react'
import styles from './styles'
import PortraitHeader from '../../components/PortraitHeader';
import { useForm, Controller } from 'react-hook-form';
import CustomInput from "../../components/CustomInput";
import axios from "axios";
import { BASE_URL } from "../../config";
import Spinner from "react-native-loading-spinner-overlay";

const REAL_NUMBER_REGEX = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/

const AddStoryScreen = (props) => {
  const navigation = props.navigation;
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  onAddingStory = (data) => {
    console.log(data);
    setIsLoading(true)
    axios
      .post(`${BASE_URL}/story/create`, data)
      .then(res => {
        setIsLoading(false)
        Alert.alert("Create Story Status", "Story Created")
      })
      .catch(e => {
        setIsLoading(false)
        Alert.alert("Create Story Status", "Story name already exist")
      })
  }

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={styles.headerContainer}>
          <PortraitHeader
            navigation={navigation}
            headerText={'Add a new story'}
          />
        </View>

        <View style={styles.bodyContainer}>
          <Image
            source={require('../../assets/MonkeyIcon.jpeg')}
            style={styles.img}
          />



          <CustomInput
            name={"storyName"}
            lable={"Story Name:"}
            placeholder={"Story Name..."}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Story name is required.'
              },
              maxLength: {
                value: 100,
                message: 'Story name max length is 100 characters.'
              },
            }}
          />

          <CustomInput
            name={"author"}
            lable={'Author:'}
            placeholder={"Author..."}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Author is required.'
              },
              minLength: {
                value: 1,
                message: 'Author name minimum length is 1.'
              },
              maxLength: {
                value: 60,
                message: 'Author name maximum length is 60.'
              },
            }}
          />

          <CustomInput
            lable={'Illustrator:'}
            name={'illustrator'}
            placeholder={"Illustrator..."}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Illustrator is required.'
              },
              minLength: {
                value: 1,
                message: 'Illustrator name minimum length is 1.'
              },
              maxLength: {
                value: 60,
                message: 'Illustrator name maximum length is 60.'
              },
            }}
          />

          <CustomInput
            lable={"Price:"}
            name={"price"}
            placeholder={"Price..."}
            control={control}
            rules={{
              required: {
                value: true,
                message: "Price is required."
              },
              pattern: {
                value: REAL_NUMBER_REGEX,
                message: "Price must be a real number"
              },
              min: {
                value: 0,
                message: "Price cannot be negative"
              }
            }}
          />

          <CustomInput
            lable={"Level: "}
            name={"level"}
            placeholder={"Level..."}
            control={control}
            rules={{
              required: {
                value: true,
                message: "Level is required."
              },
              pattern: {
                value: /[A-C]|[a-c]/,
                message: "Level must be A, B, or C"
              },
              maxLength: {
                value: 1,
                message: "Must be a single letter A, B or C"
              }
            }}
          />

          <Pressable
            onPress={handleSubmit(onAddingStory)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add Story</Text>
          </Pressable>

        </View>

      </ScrollView>

    </View>
  )
}

export default AddStoryScreen