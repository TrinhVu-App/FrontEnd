import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#98CA3E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginBottom: 50
    },
    textInput: {
        backgroundColor: '#fff',
        width: 350,
        paddingLeft: 30,
        height: 50,
        borderRadius: 30,
        marginBottom: 20
    },
    registerContainter: {
        flexDirection: 'row',
        marginTop: 15
    },
    registerText: {
        color: 'white',
        fontSize: 18
    },
    registerLink: {
        color: 'blue',
        fontSize: 18
    },
    header: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    }
})
export default styles