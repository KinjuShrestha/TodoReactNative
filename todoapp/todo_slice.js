import {createSlice} from '@reduxjs/toolkit'

const initialState = {
 tasks:[]}


const todoslice = createSlice({
name:"todos",
initialState,
reducers:{
     addTask :(state,action)=> {state.tasks.push({
        id:Date.now(),
        title:action.payload,
        isCompleted:false
       })

      
       },
       toggleStatus :(state,action)=>{
        const task = state.tasks.find(task=>task.id ===action.payload)
       if(task){
        task.isCompleted=!task.isCompleted
       }
    },
    deleteTask:(state,action)=>{
        state.tasks = state.tasks.filter(task => task.id !== action.payload);  
    }
}
});

export const {addTask,toggleStatus,deleteTask}= todoslice.actions
export default todoslice.reducer;