import { StyleSheet } from "react-native";
import { screenWidth } from "../../config";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#98CA3E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 4,
        marginTop: 100,
        alignSelf: 'center'
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
        margin: 20,
        alignSelf: 'center'
    }
})
export default styles