import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const minutesToTime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;
    return `${formattedHours}:${formattedMinutes}`
}


const Slider = ({ start, end, callback}) => {
    const [values, setValues] = useState([start, end])
    
    
    const CustomSliderMarkerLeft = ({ currentValue }) => (
        <View style={styles.pointer}>
            <Text style={styles.pointerText}>{minutesToTime(currentValue)}</Text>
        </View>
    );


    const CustomSliderMarkerRight = ({ currentValue }) => (
        <View style={styles.pointer}>
            <Text style={styles.pointerText}>{minutesToTime(currentValue)}</Text>
        </View>
    );

  return (
    <View style={styles.container}>
       <MultiSlider
                isMarkersSeparated={true}
                customMarkerLeft={(e) => (
                    <CustomSliderMarkerLeft currentValue={e.currentValue} />
                )}
                customMarkerRight={(e) => (
                    <CustomSliderMarkerRight currentValue={e.currentValue} />
                )}
                values={values}
                onValuesChange={(newValues) => setValues(newValues)}
                onValuesChangeFinish={(newValues) => {
                    const newMinTime = minutesToTime(newValues[0]);
                    const newMaxTime = minutesToTime(newValues[1]);
                    callback(newMinTime + "," + newMaxTime)
                }}
                
                min={540}
                max={1380}
                step={1}
                sliderLength={300}
                allowOverlap={false}
                trackStyle={styles.sliderFrame}
                selectedStyle={styles.sliderSelected}
                containerStyle={{alignSelf: 'center'}}
            />
    </View>
  )
}

export default Slider