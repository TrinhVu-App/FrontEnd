import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        backgroundColor: 'lime'
    },
    backButtonContainer: {
        position: 'absolute',
        top: 30,
        left: 30
    },
    header: {
        flex: 1,
        // borderColor: 'black',
        // borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 30
    },
    textBig: {
        fontSize: 30
    },
    body: {
        flex: 5,
        // borderColor: 'pink',
        // borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    coinIcon: {
        width: 20,
        height: 20,
        borderColor: 'lime',
        borderWidth: 1
    },
    textSmall: {
        fontSize: 20
    },
    confetti1: {
        position:'absolute',
        left: 40,
        bottom: 30
    },
    confetti2: {
        position:'absolute',
        right: 40,
        bottom: 30,
        transform: [{scaleX: -1}]
    }
})

export default styles;