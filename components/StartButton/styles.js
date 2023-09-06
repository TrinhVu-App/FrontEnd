import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 150,
        alignItems: 'center'
    },
    buttonContainer: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#00B9F2',
        backgroundColor: '#00B9F2',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    progressText: {
        color: '#ffffff',
        fontSize: 15,
        paddingTop: 20
    },
    downloadText: {
        color: '#00B9F2',
        fontSize: 20
    }
 
})
export default styles