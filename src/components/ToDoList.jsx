import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleToDo, removeToDo } from '../reducers/todolistSlice'


export const ToDoList = () => {
    const todos = useSelector((state) => state.todolist.items)
    const dispatch = useDispatch()

    const totalTasks = useSelector((state) => state.todolist.items.length)
    const tasksLeft = useSelector((state) => state.todolist.items.filter(task => !task.completed).length)

    return (
    <div className='parent'>
        <p>Total of tasks in your list: {totalTasks} </p>
        <p>Tasks left: {tasksLeft === 0 ? "No tasks at the moment. Add more tasks or relax! :)" : tasksLeft} </p>
        
        {todos.map((todo) => (
            <div className='todolist' key={todo.id}>
                <div className='todolist-keep-left'>
                    <input 
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => dispatch(toggleToDo(todo.id))}
                    />
                    <p className={todo.completed ? "to-do-completed" : "to-do-due"}>{todo.text}</p>
                </div>
                <button onClick={() => dispatch(removeToDo(todo.id))}>X</button>
            </div>
        ))}
    </div>
  )
}
