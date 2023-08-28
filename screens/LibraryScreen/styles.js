import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
     // flex: 1,
     //alignSelf: 'stretch',
      // alignitems: 'flex-start',
      // justifyContent: 'flex-start'
      width:'100%',
      height: '100%',
      marginTop: 35,
      // borderWidth: 2,
      // borderColor: 'red'
    },
    banner: {
      flex: 1,
      flexDirection: 'row',
      // borderColor: 'black',
      // borderWidth: 2,
      alignContent: 'center',
      paddingHorizontal: 10,
      top: 0
    },
    title: {
      flex: 5,
    //  borderColor: 'blue',
    //   borderWidth: 2,
      color: '#07B8EE',
      fontSize: 40,
      fontWeight: 'bold'
    
    },
    BackButton: {
      flex: 1,
      // borderColor: 'yellow',
      // borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    HamburgerMenu: {
      flex: 1,
      // borderColor: 'orange',
      // borderWidth: 2,
      padding: 5,
      justifyContent: 'center',
      alignItems:'center'
    },
    LevelFilter: {
      // borderColor: 'green',
      // borderWidth: 2,
      justifyContent: 'center',
      alignItems:'center',
      position: 'absolute',
      top: 0,
      left: 300
    },
    SearchButton: {
      flex: 4,
      // borderColor: 'green',
      // borderWidth: 2,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    storyListContainer: {
      flex: 5, 
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 'auto',
      height: 'auto',
      marginBottom: 25
    },
    storyList: {
      borderWidth: 2,
      borderColor: 'pink',
      margin: 10,
      justifyContent: 'space-evenly'
    }
  })

  export default styles