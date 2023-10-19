import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        backgroundColor: 'white'
        // alignItems: 'center'
        // borderWidth: 1,
        // borderColor: 'lime'
        // position: 'absolute'
    },
    customMarker: {
        width: 50,
        height: 30,
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    customMarkerValue: {
        color: 'white',
        fontSize: 10
    },
    calendarContainer: {
        width: '90%',
        alignSelf: 'center',
        height: 50,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    calendarText: {
    }
    
})

export default styles