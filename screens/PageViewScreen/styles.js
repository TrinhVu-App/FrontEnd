import { StyleSheet } from "react-native";

const font = require('../../assets/font/SourceSansPro-Regular.ttf')
export const white= "#FFFDFF";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFDFF'
    },
    canvas: {
        width: "100%",
        height: '100%',
    },
    pageTitle: {
        position: 'absolute',
        flexDirection: 'row',
        top: "10%",
        zIndex: 1,
    },
    titleWord: {
        fontSize: 25,
        color: "black"
    },
    titleWordHightlight: {
        color: "red",
        fontSize: 25
    }
})
