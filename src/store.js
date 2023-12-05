import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"

const reducer = combineReducers({
    todo: todolistSlice,
  })
  
export const store = configureStore({ reducer: reducer })


export const todolistSlice = createSlice ({
    name: "todolist",
    initalState: {
        items: []
    },
    reducers: {
        addToDo: (state, action) => {
            state.item.push({...action.payload})
        }
    }
})