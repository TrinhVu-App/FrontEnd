import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pageTitle: {
        position: 'absolute',
        justifyContent:'space-between',
        alignItems:'center',
        top: "10%",
        zIndex: 1,
    },
    titleWord: {
        fontSize: 25,
        color: "black",
    },
    titleWordHightlight: {
        color: "red",
        fontSize: 25
    }
})