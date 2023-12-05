import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../reducers/todolistSlice'

export const AddToDo = () => {
  const [todo, setToDo] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(todo)

    dispatch(addToDo(todo))
    setToDo("")
  }

    return (
    <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={todo}
            onChange={(event) => setToDo(event.target.value)}
          />
          <button type="submit">Add to do</button>
        </form>
    </div>
  )
}

