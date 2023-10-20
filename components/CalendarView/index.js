import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './styles';

const CalendarView = ({ callback }) => {
    

    const [selected, setSelected] = useState('');

    
    useEffect(() => {
        callback(selected)
    }, [selected])

    useEffect(() => {
        callback(selected)
    }, [])


    return (
        <View style={styles.calendarContainer}>
            <Calendar
                minDate={Date()}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />
        </View>
    );
}

export default CalendarView;
