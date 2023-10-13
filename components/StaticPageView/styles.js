import { StyleSheet } from "react-native";
import { screenWidth, screenHeight} from "../../config";

const font = require('../../assets/font/SourceSansPro-Regular.ttf')
export const white= "#FFFDFF";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFDFF'
    },
    canvas: {
        width: screenWidth,
        height: screenHeight,
    },
    pageTitle: {
        position: 'absolute',
        flexDirection: 'row',
        top: "10%",
        zIndex: 1,
    },
    titleWord: {
        fontSize: 25,
        color: "black"
    },
    titleWordHightlight: {
        color: "red",
        fontSize: 25
    },
    backButton: {
        flex: 1,
        position:'absolute',
        top: "10%",
        left: "2%",
        zIndex: 1
    }
})
