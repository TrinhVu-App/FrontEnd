import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    pageTitle: {
        justifyContent:'center',
        alignItems:'center',
        // borderColor: 'black',
        // borderWidth: 2,
        width: '100%',
        height: '100%'
    },
    titleWord: {
        marginVertical: 10,
        fontSize: 20,
        color: "black",
    },
    titleWordHightlight: {
        color: "red",
        fontSize: 20    }
})