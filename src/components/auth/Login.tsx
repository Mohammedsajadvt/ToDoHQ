import { Input } from '../ui/input';
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loginUser } from '../../features/auth/authSlice';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from 'sonner';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email,  password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
        toast.success("Login successfull");
      })
      .catch((err: any) => {
        toast.error(err || "Login failed");
      });
  };
  return (
    <div className='border bg-[##D9D9D9] max-w-sm  border-gray-200 rounded shadow-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
      <div className='space-y-8 space-x-2'>
        <h2 className='font-bold  text-3xl'>Sign In</h2>
        <Input className='mt-4 min-w-80' type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Input className='mt-4' type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button className="w-full text-white flex" disabled={loading} onClick={handleLogin} variant="default" size="lg">Login</Button>
        <p className="mt-3 text-sm text-muted-foreground text-center justify-center">Don’t have an account?{" "}
          <Link to="/register" className="font-medium text-[#008BD9] hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
