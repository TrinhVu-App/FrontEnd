import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles'

const LevelFilter2 = () => {
    const [selected, setSelected] = React.useState("");
    
    useEffect(() => {
      if (selected) {
        console.log(selected);
      }
    },[selected])

    const data = [
        {key: '0', value: 'All levels'},
        {key: '1', value: 'Level A'},
        {key: '2', value: 'Level B'},
        {key: '3', value: 'Level C'},
        {key: '4', value: 'Level D'}
    ]

  return (
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        maxHeight={125}
        placeholder='All levels'
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle}
        search={false}
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
    />
  )
}

export default LevelFilter2