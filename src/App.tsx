import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputField from './InputField'
import React, { useState, useEffect } from 'react'
import { Todo } from './model'
import TodoList from './Components/TodoList'
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  console.log(todos)
  return (
    <div>
      <span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </span>
    </div>
  )
}

export default App
// <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Authentication />} />
//     </Routes>
//   </BrowserRouter>
