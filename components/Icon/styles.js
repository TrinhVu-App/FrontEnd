import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        flexDirection: 'row',
    },
    image: {
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
        opacity: 0.75,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 17,
        color: 'black',
        opacity: 1,
        
    },
    symbol: {
        marginVertical: 10,
        fontSize: 25,
    },
})

export default styles