import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        // borderWidth: 1,
        paddingVertical: 10
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    tagButton: {
        padding: 10,
        borderColor: '#AB2430',
        borderWidth: 1,
        borderRadius: 12,
        marginLeft: 5,
        marginTop: 5,
        // backgroundColor: '#AB2430'
    },
    selectedTagButon: {
        padding: 10,
        borderColor: '#AB2430',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#AB2430',
        marginLeft: 5,
        marginTop: 5
    },
    tagText: {
        fontSize: 14,
        color: '#AB2430'
    },
    selectedTagText: {
        fontSize: 14,
        color: 'white'
    }
})

export default styles