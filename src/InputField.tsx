import React, { useRef } from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      className='form'
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
      }}
    >
      <label className='form-label'>Enter task</label>
      <input
        ref={inputRef}
        className='form-input'
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <button className='btn' type='submit'>
        Submit
      </button>
    </form>
  )
}
export default InputField
