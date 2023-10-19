import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles  from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TagSelector = ({ lable, tags, callback , pickedTag}) => {

    const [selectedTag, setSelectedTag] = useState(pickedTag);

    
    const tagButtons = tags.map((tag, index)=> {
        let selected = false;
        if (selectedTag == tag) {
            selected = true;
        }
        return (
            <TouchableOpacity key={index} style={selected? (styles.selectedTagButon): (styles.tagButton)} onPress={() => {setSelectedTag(tag)}}>
                <Text style={selected? (styles.selectedTagText): (styles.tagText) }>{tag}</Text>
            </TouchableOpacity>
        )
    })

    useEffect(() => {
        if(selectedTag) {
             callback(selectedTag)
        }
       
    }, [selectedTag])

    useEffect(() => {
            setSelectedTag(pickedTag)
    }, [pickedTag])


  return (
    <View style={styles.container}>
      <Text> {lable}:</Text>
      <View style={styles.tagContainer}>
        {tagButtons}
      </View>
    </View>
  )
}

export default TagSelector