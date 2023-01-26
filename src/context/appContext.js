import { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {} from './actions'
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const cart = localStorage.getItem('cart')
const initialState = {}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //Axios Setup
  const authFetch = axios.create({
    baseURL: '/api/v1/',
  })

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
