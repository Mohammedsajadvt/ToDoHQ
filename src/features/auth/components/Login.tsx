import React from 'react'
import login from "../../../assets/login.png"
import { Input } from '../../../components/ui/input'
import { Checkbox } from '../../../components/ui/checkbox'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='flex'>
            <div className='flex-col absolute left-10 top-25'>
                <h2 className='font-bold flex text-3xl'>SignUp</h2>
                <Input className='mt-4 min-w-150' type='username' placeholder='Enter Username' />
                <Input className='mt-4 min-w-150' type='password' placeholder='Enter Password' />
                <div className='flex mt-3 gap-4 items-center'>
                    <Checkbox className="border-black" />
                    <label htmlFor="" className="text-[#212427] font-medium text-base">Remember Me</label>
                </div>
                <Button className="min-w-30 flex mt-3 h-13" variant="default" size="lg">Login</Button>
                <p className="flex mt-8 text-sm text-muted-foreground text-center">Don’t have an account?{" "}
                    <Link to="/login" className="font-medium text-[#008BD9] hover:underline">Create one</Link>
                </p>

            </div>
            <img src={login} alt="logo" className='h-auto max-w-lg absolute right-0 bottom-0' />
        </div>
    )
}

export default Login
