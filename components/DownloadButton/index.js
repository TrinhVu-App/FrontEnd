import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const DownloadButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", position: 'absolute' }} size={135} />
                <FontAwesomeIcon icon={faDownload} style={{ color: "#ffffff" }} size={30} />
                <Text style={styles.progressText}>3.22 MB</Text>
            </TouchableOpacity>
            <Text style={styles.downloadText}>Download</Text>
        </View>

    )
}

export default DownloadButton