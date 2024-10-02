
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 50,
    },
    textinput: {
        marginTop:10,
      padding: 10,
      borderColor: '#D3B2E0',
      borderWidth: 1,
      marginBottom: 20,
      width: '100%',
    },
    taskListContainer: {
      borderColor: '#D3B2E0',
      borderWidth: 2,
      marginBottom: 20,
      width: '100%',
      backgroundColor: '#abdbe3',
      padding: 10,  
    },
    taskTitle: {
      textAlign: 'center',
      fontWeight: 'bold',  
    },
    statusContainer: {
      flexDirection: 'row',  
      alignItems: 'center',  
      justifyContent: 'space-between',  
      marginVertical: 10,  
    },
    status: {
      marginRight: 10,  
    },

    addButton: {
        backgroundColor: '#D3B2E0', 
        borderRadius: 50, 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        alignItems: 'center', 
        marginBottom: 20, 
      },
      buttonText: {
        color: '#fff', 
        fontWeight: 'bold',
      },
      taskText:{
      fontWeight:'bold',
      fontStyle:'italic',
      color:'#D3B2E0',
      fontSize: 20,
      marginBottom:10
      }

  });

  export default style;