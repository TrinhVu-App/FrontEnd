import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 'auto',
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 12
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
    
    calendarText: {
    },
    headerText: {
        alignSelf: 'center',
        marginVertical: -12,
        fontSize: 20,
        fontWeight: "bold"
    },
    submitButton: {
        width: "80%",
        height: 'auto',
        borderColor: '#AB2430',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: '#AB2430'
    },
    submitButtonText: {
        fontSize: 20,
        color: "white"
    },
    cancelButton: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'flex-end',
        marginTop: -13,
        marginRight: -13,
        borderRadius: 12,
        // backgroundColor: 'white'
    }
    
})

export default styles