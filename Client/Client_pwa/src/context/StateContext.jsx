import React from 'react'
import axios from 'axios'

const StateContext = React.createContext()

export const StateContextProvider = ({ children }) => {
    const [classes, setClasses] = React.useState([])
    const [students, setStudents] = React.useState([])
    
    const fetchClasses = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/class')
            setClasses(response.data.classes)
            console.log(response.data.classes)
        }catch(error){
            console.log(error)
        }
    }
    const fetchStudents = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/student')
            setStudents(response.data.students)
        }catch(error){
            console.log(error)
        }
    }
    React.useEffect(() => {
      fetchClasses()
      fetchStudents()
    }, [])
  return (
    <StateContext.Provider value={{
      classes,
      students
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)
