import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { AddToDo } from "./components/AddToDo"
import todolistReducer from "./reducers/todolistSlice"


const store = configureStore({ 
  reducer: {
  todolist: todolistReducer
  } 
})
console.log(store.getState());

export const App = () => {
  return (
  <Provider store={store}>
    <div>Find me in App.jsx!</div>
    <AddToDo />
  </Provider>
  )
}
