import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        marginBottom: 10,
        width: '100%',
        height: '100%',
        // borderColor: 'black',
        // borderWidth: 2,
        flexDirection: 'row'
    },
    backButton: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',
        position: 'absolute',
        top: 10,
        left: 10
    },
    hearthButton: {
        // borderWidth: 1,
        // borderColor: 'red',
        borderRadius: 100,
        position: 'absolute',
        right: 15,
        top: 10,
        backgroundColor: '#DBDBDB',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyThumbContainer: {
        flex: 1,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 1,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        marginTop: 50,
        marginLeft: 70,
        marginBottom: 50,
        shadowColor: 'blue',
        elevation: 10
    },
    storyThumb: {
        width: '100%',
        height: '100%'
    },
    elevation: {
        elevation: 50,
        shadowColor: '#52006A',
    },
    bookmark: {
        position: 'absolute',
        top: -1,
        left: 10,
        width: 30,
        height: 50
    },
    storyDetailContainer: {
        flex: 2,
        marginLeft: 30
    },
    titleContainer: {
        flex: 4,
        // borderColor: 'red',
        // borderWidth: 1
    },
    title: { 
        color: '#1F689E',
        fontSize: 50,
        fontWeight: 'bold',
        paddingTop: 30
    },
    attributeContainer: {
        flex: 2,
        // borderColor: 'orange',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    attributePartContainer: {
        flex: 1,
        // borderColor: 'blue',
        // borderWidth: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    attributHeader: {
        color: '#4DC1F5',
        fontSize: 20,
        fontWeight: 'bold'
    },
    attributeText: {
        color: '#5785A0',
        fontSize: 20
    },
    buttonContainer: {
        flex: 6,
        // borderColor: 'green',
        // borderWidth: 1,
        paddingTop: 20,
        paddingLeft: 50
    }
})

export default styles