import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import TagSelector from '../TagSelector'
import TwoPointersSlider from '../TwoPointersSlider'
import MultiSlider from "@ptomasroos/react-native-multi-slider"
import Slider from '../Slider'
import { TouchableOpacity } from 'react-native-gesture-handler'



const MapFilter = () => {
    const [selectedDate, setSelectedDate] = useState("Today")
    const [selectedTime, setSelectedTime] = useState("Open now")
    const [timeFrame, setTimeFrame] = useState();
    

    useEffect(() => {
        if (selectedTime == "Open now" && selectedDate!= "Today") {
            setSelectedTime("Lunch")
        }
    }, [selectedDate])


  return (
    <View style={styles.container}>
      <TagSelector
        lable={"Pick a date"}
        tags={["Today", "Tomorrow", "Another Date"]}
        callback={setSelectedDate}
       />
      <TagSelector
        lable={"Pick a time"}
        tags={["Open now", "Lunch", "Dinner", "Choose your time"]}
        callback={setSelectedTime}
        pickedTag={selectedTime}
       />

        <View style={styles.sliderContainer}>
            <Slider start={540} end={1380} callback={setTimeFrame}/>
        </View>


        <TouchableOpacity style={styles.calendarContainer}>
            <Text style={styles.calendarText}>Calendar goes here</Text>
        </TouchableOpacity>
        

       <Button title='Submit' onPress={()=> console.log(`Date: ${selectedDate}, Time: ${selectedTime}, Time frame: ${timeFrame}`)}/>
    </View>
  )
}

export default MapFilter