import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: 35,
        backgroundColor: '#61DAFB',
    },
    topSection: {
        backgroundColor: '#61DAFB',
        alignItems: 'center',
        bottom: 0,
        flex: 1
    },
    header: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },
    storyButton: {
        marginTop: 75,
        transform: [{ scale: 1.6}]
    },
    bottomSection: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    storiesForYouButtonContainer: {
        zIndex: 1,
        marginLeft: -12,
        transform: [{scale: 0.8}]
        // borderWidth: 1,
        // borderColor: 'black'
    },
    readButtonContainer: {
        zIndex: 1
    },
    libraryButtonContainer: {
        zIndex: 1,
        transform: [{ scale: 0.8 }]
    },
    imageBackground: {
        width: '100%',
        height: "110%",
        overflow: 'visible',
        position: 'absolute',
        left: 0,
        zIndex: 0
    }
})
export default styles