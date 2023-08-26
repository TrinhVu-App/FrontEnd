import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDA304',
        borderRadius: 100,
        width: 350,
        height: 100,
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingTop: 10,
        flexDirection: 'row'
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
        marginTop: -55,
        width: 210,
        height: 150
    }
})

export default styles