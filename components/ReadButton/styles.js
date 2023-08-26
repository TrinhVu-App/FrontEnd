import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {    
        justifyContent: 'center',
        alignItems: 'center'
        // borderWidth: 1,
        // borderColor: 'red'
    },
    button: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#98CB3E',
        backgroundColor: '#98CB3E',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    text: {
        color: '#98CB3E',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles