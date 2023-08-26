import { View, Text } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles'

const LevelFilter2 = () => {
    const [selected, setSelected] = React.useState("");

    const data = [
        {key: '0', value: 'All levels'},
        {key: '1', value: 'Level 1'},
        {key: '2', value: 'Level 2'},
        {key: '3', value: 'Level 3'},
        {key: '4', value: 'Level 4'}
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