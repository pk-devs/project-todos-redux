import { createSlice } from "@reduxjs/toolkit"

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        items: []
    },
    reducers: {
        addToDo: (state, action) => {
            state.items.push({id: Date.now(), text: action.payload })
            
        },
        toggleToDo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        removeToDo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addToDo, toggleToDo, removeToDo } = todolistSlice.actions

export default todolistSlice.reducer