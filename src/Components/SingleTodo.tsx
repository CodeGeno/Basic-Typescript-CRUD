import React, { useState } from 'react'
import { Todo } from '../model'
import { AiOutlineEdit, AiFillCheckSquare, AiFillDelete } from 'react-icons/ai'
import TodoList from './TodoList'
type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }
  return (
    <form
      className='todo-container'
      onSubmit={(e) => {
        handleEdit(e, todo.id)
      }}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value)
          }}
          className='form-input'
        />
      ) : todo.isDone ? (
        <s className='form-label'>{todo.todo}</s>
      ) : (
        <span className='form-label'>{todo.todo}</span>
      )}

      <div className='todo-btn-container'>
        <span
          className='btn'
          onClick={() => {
            handleDone(todo.id)
          }}
        >
          <AiFillCheckSquare />
        </span>
        <span
          className='btn'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            } else {
              setEdit(!edit)
            }
          }}
        >
          <AiOutlineEdit />
        </span>
        <span
          className='btn'
          onClick={() => {
            handleDelete(todo.id)
          }}
        >
          <AiFillDelete />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
