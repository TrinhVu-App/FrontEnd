import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        marginTop: "11%",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        overflow:'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B6D7A8'
    },
    headerContainer: {
        flex: 7,
        width: '100%',
    },
    bodyContainer: {
        flex: 93,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'green',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 30
    },
    img: {
        borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#512DA8',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 12
    },
    buttonText: {
        color: "white",
        fontSize: 17
    }
})

export default styles;