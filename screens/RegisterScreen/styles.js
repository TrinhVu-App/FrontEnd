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
    header: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        // borderWidth: 1
        // margin: 20
    },
    bannerContainer: {
        // borderWidth: 1,
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    bodyContainer: {
        flex: 7,
        // borderWidth: 1,
        width: '100%',
        paddingHorizontal: 30
        // alignItems: 'center',
        // justifyContent: 'center'
    },

})
export default styles