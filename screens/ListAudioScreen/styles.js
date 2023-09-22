import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '12%'
    },
    headerBar: {
        width: "100%",
        height: '7%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 10,
        // borderWidth: 2,
        // borderBottomWidth: 0,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 20
    },
    headerTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 2,
        // borderColor: 'green'
    },
    headerText: {
        fontSize: 30
    },
    scrollView: {
        // flex: 9,
        width: '100%',
        height: '90%',
        // borderColor: 'blue',
        // borderWidth: 2
    }
})


export default styles;