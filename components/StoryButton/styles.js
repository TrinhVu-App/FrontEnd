import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'gray',
        width: 145,
        height: 200,
        marginTop: 13,
        marginLeft: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    imageFrame: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        width: 140
    },
    bookmark: {
        position: 'absolute',
        top: 0,
        left: -2,
        height: 35,
        width: 30
    },
    img: {
        backgroundColor: 'gray',
        width: 135,
        height: 170,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    text: {
        fontSize: 15,
        marginTop: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 3
    }
})

export default styles