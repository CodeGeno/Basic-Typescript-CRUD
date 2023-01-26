import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='form'>
      {todos.map((todo) => {
        return <SingleTodo todo={todo} setTodos={setTodos} todos={todos} />
      })}
    </div>
  )
}
export default TodoList
