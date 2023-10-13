import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { DEMO_ICON_STORY } from '../../DEMO_ICON_STORY_DATA'
import { Directions, Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import styles from './styles'
import StaticPageView from '../../components/StaticPageView'
import { DEMO_STORY_DATA } from '../../DEMO_DATA'
import IconStoryPageView from '../../components/IconStoryPageView'
import { runOnJS } from 'react-native-reanimated'
import { useContext } from 'react'
import { ContextAPI } from '../../context/ContextAPI'
import BackButton from '../../components/BackButton'

const StoryContentScreen = ({ navigation, route }) => {
    // const storyData = DEMO_ICON_STORY;
    // const storyData = DEMO_STORY_DATA;
    const storyData = route.params.storyData
    const [currentPage, setCurrentPage] = useState(0);
    const [isSynctext, setIsSynctext] = useState(false)
    const pageData = storyData.pages[currentPage]
    const pageType = pageData.type;
    // const timingID = useTimingID((state) => state.timingID)
    // const bears = useStore((state) => state.bears)

    // try{
    //     console.log(bearz);
    // } catch (e) {
    //     console.log(e);
    // }
    
    const pageView = () => {
        switch (pageType) {
            case 0: {
                return (
                   
                    <StaticPageView
                        pageData={pageData}
                        storyType={storyData.type}
                        isSynctext={isSynctext}
                        setIsSynctext={setIsSynctext}
                    />
                )
            }

            case 1: {
                return (
                    <IconStoryPageView
                        pageData={pageData}
                    />
                )
            }

            default: {
                return (
                    <Text>Invalid Page Type</Text>
                )
            }
        }


    }

    const nextPage = () => {
        if(currentPage < storyData.pages.length-1) {
            setCurrentPage(currentPage=> currentPage+1)
        } else {
            navigation.replace('scoringScreen')
        }
        
    }

    const prevPage = () => {
        if (currentPage != 0) {
            // setPageNumb(false)
            setCurrentPage(currentPage=> currentPage-1)
        } else {
            console.log("Fist page!")
        }
    }

    const goForward = Gesture.Fling()
        .direction(Directions.LEFT)
        .onEnd(nextPage)

    const goBack = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onEnd(prevPage)

    const composedGesture = Gesture.Simultaneous(goBack, goForward)

    return (
            <GestureDetector gesture={composedGesture}>
                <View style={styles.container}>
                {pageView()}
                    <View style={styles.backButtonContainer}>
                        <BackButton navigation={navigation}/>
                    </View>
                    
                    
                </View>
             </GestureDetector>

    )
}

export default StoryContentScreen