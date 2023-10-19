import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'
import BackButton from '../../components/BackButton'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../config'
import { useEffect } from 'react'
import AudioButton from '../../components/AudioButton'
import Spinner from 'react-native-loading-spinner-overlay'
import PotraitHeader from '../../components/PortraitHeader'

const ListAudioScreen = (props) => {
    const [audioData, setAudioData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = props.navigation

    const getAudios = () => {
        setIsLoading(true);

        axios
            .get(`${BASE_URL}/story/audio`)
            .then(res => {
                let data = res.data;
                setAudioData(data);
                console.log('data loaded');
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getAudios();
    }, [])

    const renderItem = ({ item }) => {
        return <AudioButton name={item.name} id={item.id} />
    }

    return (
        <View style={styles.container}>
            <PotraitHeader
                navigation={navigation}
                headerText={"Audio List"}
            />
            {isLoading ? (
                <View style={[styles.scrollView, {alignItems: 'center', justifyContent: 'center'}]}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>

            ) : (
                <FlatList
                    style={styles.scrollView}
                    data={audioData}
                    keyExtractor={item => item.id}
                    renderItem={
                        renderItem
                    }
                />)}


        </View>
    )
}

export default ListAudioScreen