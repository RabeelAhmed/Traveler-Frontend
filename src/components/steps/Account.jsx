import {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'


export default function Account() {
  const { userData, setUserData } = useContext(StepperContext);


  const handleChange = (e) => {
    const { name, value } = e.target;  
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className='flex flex-col'>

<div className='w-full mx-2 flex-1'>
  <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
    Username
  </div>
  <div className='bg-transparent backdrop-blur-lg my-2 p-1 flex border border-gray-200 rounded'>
    <input
      onChange={handleChange}
      value={userData["username"] || ""}
      name='username'
      placeholder='Username'
      className='p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-transparent'
    />
  </div>
</div>

<div className='w-full mx-2 flex-1'>
  <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
    Password
  </div>
  <div className='bg-transparent backdrop-blur-lg my-2 p-1 flex border border-gray-200 rounded'>
    <input
      onChange={handleChange}
      value={userData["password"] || ""}
      name='password'
      placeholder='Password'
      type='password'
      className='p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-transparent' // Set bg-transparent here
    />
  </div>
</div>


    </div>
  )
}
