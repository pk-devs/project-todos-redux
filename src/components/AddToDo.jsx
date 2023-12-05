import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../reducers/todolistSlice'

export const AddToDo = () => {
  const [todo, setToDo] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addToDo(todo))
    setToDo("")
  }

  return (
    <div className="parent">
      <h1>Welcome to a simple but handy To-Do list app</h1>
      <p>Write your to-do and hit the button to add it to the list and start grinding away and completing tasks!</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={todo}
          onChange={(event) => setToDo(event.target.value)}
          required
        />
        <button type="submit">Add to do</button>
      </form>
    </div>
  )
}

