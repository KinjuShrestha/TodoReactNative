import todoslice from './todo_slice'
import { configureStore } from "@reduxjs/toolkit";

export default  store = configureStore({
    reducer:{
        todos: todoslice
    }
})