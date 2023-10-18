import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // borderWidth: 1
    },
    headerContainer: {
        flex: 2,
        width: "100%",
        flexDirection: 'row',
        // borderWidth: 1, 
        alignItems: 'center',
        borderColor: 'lime'
    },
    backButtonContainer: {
        marginLeft: 10,
        borderColor: 'pink',
        // borderWidth: 1,
    },
    headerTextContainer: {
        borderColor: 'green',
        // borderWidth: 1,
        marginLeft: 20
    },
    headerText: {
        color: '#07B8EE',
        fontSize: 40,
        fontWeight: 'bold'
    },
    bodyContainer: {
        flex: 8,
        width: '100%',
        // borderWidth: 1, 
        borderColor: 'blue'
    },
    buttonContainer: {
        width: 300,
        height: 75,
        backgroundColor: '#9a02cc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
    buttonTouchable: {
        width: 300,
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // borderWidth: 1
    }
})

export default styles