import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterButtonContainer: {
        position: 'absolute',
        top: "5%",
        justifyContent: 'space-between',
        right: 20
    },
    filterContainer: {
        width: '90%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        // overflow: 'hidden',
        borderWidth: 1,
        position: 'absolute'
    },
    button: {
        width: 'auto',
        height: 'auto',
        padding: 12,
        marginVertical: 4,
        borderWidth: 1,
        borderColor: '#AB2430',
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButtonContainer: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: "6%",
        left: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#AB2430',
    }
  
})
export default styles