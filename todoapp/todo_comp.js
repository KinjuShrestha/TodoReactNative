import {View,Text,Button ,Alert, ToggleEvent,StyleSheet, Switch,TextInput, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleStatus,addTask,deleteTask } from './todo_slice';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import style from './todo_styles'

export default function TodoComponent (){
const dispatch = useDispatch();
const task = useSelector((state)=>state.todos.tasks);
const [newTask,setTask] = useState('')
const addTaskFun = ()=>{
    if(newTask.trim()===""){
        Alert.alert("Enter title to add task")
    }
    else {
    dispatch(addTask(newTask))
    setTask('')}
}
const handleDeleteTask = (id)=>{
    dispatch(deleteTask(id))
}

const onTogglehandle = (id)=>{
    dispatch(toggleStatus(id))
}

const renderList = ({ item }) => {
    return (
      <View style={style.taskListContainer}>
        <Text style={style.taskTitle}>{item.title}</Text>
  
        
        <View style={style.statusContainer}>
          <Text style={style.status}>Status: {item.isCompleted ? 'Completed' : 'Not Completed'}</Text>
          
          <Switch
            onValueChange={() => onTogglehandle(item.id)}
            value={item.isCompleted}
            trackColor={{
              false: '#808080',
              true: '#4CAF50',
            }}
            thumbColor='#FFFFFF'
          />
        </View>
  
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <Icon name="delete" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    );
  };
  
return(  <View style={style.container}>
<Text style={style.taskText}> To Do Task </Text>
<TextInput
  style={style.textinput}
  placeholder="Enter task"
  onChangeText={setTask}  
  value={newTask}  />

<TouchableOpacity style={style.addButton} onPress={addTaskFun}>
        <Text style={style.buttonText}>Add Task</Text>
      </TouchableOpacity>
      {task.length >0 && (<Text style={style.taskText}>Your Task List</Text>)}
   
<FlatList data={task} renderItem={renderList}></FlatList>
    </View>);
}


  