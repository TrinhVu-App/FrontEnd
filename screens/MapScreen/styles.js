import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterButtonContainer: {
        position: 'absolute',
        top: "5%",
        right: 20
    },
    filterContainer: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        position: 'absolute'
    }
})

export default styles