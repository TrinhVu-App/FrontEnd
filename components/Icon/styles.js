import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        flexDirection: 'row'
    },
    image: {
        // borderWidth: 1,
        // borderColor: "red",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'gray',
        overflow: 'visible',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.75
    },
    text: {
        fontSize: 17,
        color: 'black',
        opacity: 1
    },
    symbol: {
        marginVertical: 10,
        fontSize: 25,
        color: "black",
        position: 'absolute',
        right: -5
    },
})

export default styles