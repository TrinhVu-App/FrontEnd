import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import TagSelector from '../TagSelector'
import TwoPointersSlider from '../TwoPointersSlider'
import MultiSlider from "@ptomasroos/react-native-multi-slider"
import Slider from '../Slider'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CalendarView from '../CalendarView'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'


const sentMapRequest = (selectedDate, selectedTime, calendarDate, timeFrame, callback) => {

  let timeRange = '900,2300'
  let _date = calendarDate
  let timeTab = 'open-now'
  let dayTab = 'today'
  let timeStart = 900
  let timeEnd = 2300



  if (selectedDate == "Another date") {
    dayTab = 'custom'
  } else {
    dayTab = selectedDate.toLowerCase()
  }

  if (selectedTime == "Choose your time") {
    timeTab = 'custom',
      timeRange = timeFrame.replaceAll(':', '')
    timeStart = timeFrame.split(',')[0].replaceAll(':', '')
    timeEnd = timeFrame.split(',')[1].replaceAll(':', '')
  } else {
    timeTab = selectedTime.toLowerCase()
  }

  const params = {
    time_range: timeRange,
    date: _date,
    time_tab: timeTab,
    day_tab: dayTab,
    time_start: timeStart,
    time_end: timeEnd,
    browser_utc: 420
  }


  axios.get('https://starwinelist.com/api/map/venues', { params })
    .then(response => {
      callback(response.data.data)
    })
    .catch(error => {
      console.error(error);
    });
}

const MapFilter = ({ callback, toggleFilter }) => {

  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();


  const [selectedDate, setSelectedDate] = useState("Today")
  const [selectedTime, setSelectedTime] = useState("Open now")
  const [calendarDate, setCalendarDate] = useState(`${year}-${month}-${day}`)
  const [timeFrame, setTimeFrame] = useState();


  useEffect(() => {
    if (selectedTime == "Open now" && selectedDate != "Today") {
      setSelectedTime("Lunch")
    }
  }, [selectedDate])

  useEffect(() => {
    if (selectedTime == "Open now") {
      setSelectedDate("Today")
    }
  }, [selectedTime])


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cancelButton} onPress={()=>  toggleFilter(_prevState => !_prevState) }>
        <FontAwesomeIcon icon={faRectangleXmark} color='#AB2430' size={50} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Filter winebars/restaurants</Text>
      <TagSelector
        lable={"Pick a date"}
        tags={["Today", "Tomorrow", "Another date"]}
        callback={setSelectedDate}
        pickedTag={selectedDate}
      />
      <TagSelector
        lable={"Pick a time"}
        tags={["Open now", "Lunch", "Dinner", "Choose your time"]}
        callback={setSelectedTime}
        pickedTag={selectedTime}
      />

      {(selectedTime == "Choose your time") && (
        <View style={styles.sliderContainer}>
          <Slider start={540} end={1380} callback={setTimeFrame} />
        </View>

      )}


      {(selectedDate == "Another date") && (
        <CalendarView callback={setCalendarDate} />
      )}




      <TouchableOpacity style={styles.submitButton} onPress={() => { sentMapRequest(selectedDate, selectedTime, calendarDate, timeFrame, callback); toggleFilter(_prevState => !_prevState) }}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {/* <Button title='Submit' onPress={() => {sentMapRequest(selectedDate, selectedTime, calendarDate, timeFrame, callback); toggleFilter(_prevState => !_prevState)}} /> */}
    </View>
  )
}

export default MapFilter