import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01BAF2',
        borderRadius: 100,
        width: 400,
        height: 100,
        justifyContent: 'space-between',
        paddingTop: 10,
        flexDirection: 'row'
    },
    textContainer: {
        paddingRight: 30
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 30
    },
    flavorText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20
    },
    imageContainer: {
        // borderWidth: 1,
        // borderColor: 'red'
    },
    image: {
        marginTop: -80,
        marginLeft: -30,
        width: 200,
        height: 220
    }
})

export default styles