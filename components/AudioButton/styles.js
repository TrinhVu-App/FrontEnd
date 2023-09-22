import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderColor: 'green',
        // borderWidth: 1,
        paddingHorizontal: 3
    },
    playButton: {
        flex: 1,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 9,
        paddingHorizontal: 5,
        // paddingVertical: 3
    },
    text: {
        fontSize: 20,
        marginVertical: 3
    }
})

export default styles;
