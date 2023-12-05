import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { AddToDo } from "./components/AddToDo"
import { ToDoList } from "./components/ToDoList"
import todolistReducer from "./reducers/todolistSlice"

const store = configureStore({ 
  reducer: {
  todolist: todolistReducer
  } 
})

export const App = () => {
  return (
  <Provider store={store}>
    <AddToDo />
    <ToDoList />
  </Provider>
  )
}
