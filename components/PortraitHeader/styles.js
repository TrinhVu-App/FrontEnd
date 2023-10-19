import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerBar: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 10,
        backgroundColor: 'green'
        // borderWidth: 2,
        // borderBottomWidth: 0,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 20
    },
    headerTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        color: 'white'
    },
})

export default styles;