import React, {useState} from 'react'
import axios from 'axios'

const DataBox = () => {
    const [name, setName] = useState('');
  const [userType, setUserType] = useState(''); // You might want to set an initial value or use null
  const [className, setClassName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleSubmit = async() => {
    const result = await axios.post('http://localhost:3000/api/setdata', {name, type: userType, class: className, uid: localStorage.getItem('uid')})
    if(result){
        window.location.replace('/home')
    }
  }
  return (
    <div className='py-10 px-10 flex flex-col bg-gray-100'>
        <div className='shadow-lg px-5 py-5 bg-white rounded-[7px] h-screen'>
                <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
                className="border border-1 my-5 pl-3 py-3 rounded-[7px] w-full"
            />

            <select
                value={userType}
                onChange={handleUserTypeChange}
                className="border border-1 my-5 pl-3 py-3 rounded-[7px] w-full"
            >
                <option value="">Select user type</option>
                <option value={0}>University</option>
                <option value={1}>Teacher</option>
                <option value={2}>Student</option>
            </select>

            <input
                type="text"
                placeholder="Enter class name"
                value={className}
                onChange={handleClassNameChange}
                className="border border-1 my-5 pl-3 py-3 rounded-[7px] w-full"
            />
            <button className='bg-black px-3 py-3 rounded-[7px] flex justify-center m-auto text-white' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default DataBox