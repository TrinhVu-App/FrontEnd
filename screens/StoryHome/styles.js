import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: 25,
        backgroundColor: '#61DAFB'
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
        transform: [{ scale: 1.6 }]
    },
    bottomSection: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    storiesForYouButtonContainer: {
        zIndex: 1,
        marginLeft: -12,
        transform: [{ scale: 0.8 }]
        // borderWidth: 1,
        // borderColor: 'black'
    },
    readButtonContainer: {
        zIndex: 1,
        paddingBottom: 35

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
    },
    menuSection: {
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 2,
        backgroundColor: "white",
        width: 65,
        borderRadius: 15,
        // borderColor: 'orange',
        // borderWidth: 2,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // menuContainer: {
    //     position: 'absolute',
    //     top: "15%",
    //     right: 20,
    //     top: 
    //     zIndex: 2
    // },
})
export default styles