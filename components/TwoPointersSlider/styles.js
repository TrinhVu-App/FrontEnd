import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        // alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        paddingVertical: 20,
    },
    sliderFrame: {
        width: '90%',
        marginLeft: 5,
        height: 5,
        backgroundColor: 'gray',
        alignSelf: 'center'
    },
    sliderSelected: {
        width: '80%',
        height: 5,
        backgroundColor: 'red',
       
    },
    pointer: {
        width: 50,
        height: 30,
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    pointerText: {
        color: 'white',
        fontSize: 10
    }
})

export default styles