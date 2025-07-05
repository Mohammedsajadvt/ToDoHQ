import { Input } from '../ui/input';
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { registerUser } from '../../features/auth/authSlice';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from 'sonner';

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ email, username, password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
        toast.success("Registered successfully");
      })
      .catch((err: any) => {
        toast.error(err || "Registration failed");
      });
  };

  return (
    <div className='border  max-w-sm border-gray-200 rounded shadow-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
      <div className='space-y-8 space-x-2'>
        <h2 className='font-bold text-3xl'>Sign Up</h2>
        <Input
          className='mt-4 min-w-80'
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          className='mt-4'
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className='mt-4'
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="w-full text-white flex"
          disabled={loading}
          onClick={handleRegister}
          variant="default"
          size="lg"
        >
          Register
        </Button>
        <p className="mt-3 text-sm text-muted-foreground text-center justify-center">
          Already have an account?{" "}
          <Link to="/" className="font-medium text-[#008BD9] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
