import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3d7e6'
    },
    loadingBar: {
        width: 500,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        overflow: 'hidden'
    },
    loadingBarProgress: {
        backgroundColor: 'blue',
        height: 30,
    },
    loadingCompleteButton: {
        width: 275,
        height: 100,
        backgroundColor: '#07B8EE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    loadingCompleteText: {
        color: 'white',
        fontSize: 20,
    },
    swipeLeftHandContainer: {
        position: 'absolute',
        left: 60,
        top: 60
    },
    tipContainer: {
        position: 'absolute',
        top: 100,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 50
    },
    tipText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles