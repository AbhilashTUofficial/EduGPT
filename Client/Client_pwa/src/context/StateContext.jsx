import React from 'react'

const StateContext = React.createContext()

export const StateContextProvider = ({ children }) => {
    const [classes, setClasses] = React.useState([])
    const [students, setStudents] = React.useState([])
    
  return (
    <StateContext.Provider value={{
      
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)
