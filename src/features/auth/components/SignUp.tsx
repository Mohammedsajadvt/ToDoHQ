import React from 'react'
import signup from "../../../assets/signup.png";
import { Input } from '../../../components/ui/input';
function SignUp() {


  return (
    <div className='flex'>
      <img className='h-auto max-w-xs absolute left-0 bottom-0' src={signup} alt="" />
      <div className='flex-col absolute top-6 '>
        <h2 className=' font-bold text-3xl'>SignUp</h2>
        <Input type='email'/>
      </div>
    </div>
  )
}

export default SignUp
