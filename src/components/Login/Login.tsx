import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { PiLockKeyBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ILoginApiParams, loginApi } from '../../api/auth.api';
import { useAuth } from '../context/Auth.context';
import { Cookies } from 'react-cookie';

export interface ILoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const [failedAttempts, setFailedAttempts] = useState<number>(0);
  const [blockedUntil, setBlockedUntil] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth(); // Use setAuth from context

  const usernameSchema = z
    .string()
    .min(5, 'Username must have at least 5 characters')
    .regex(/^[A-Za-z][A-Za-z0-9 -]*$/, 'Username must be alphanumeric and cannot contain spaces');

  const passwordSchema = z
    .string()
    .min(8, 'Password must have at least 8 characters')
    .max(16, 'Password must have at most 16 characters')
    .regex(/[A-Za-z0-9!@#$]/, 'Password must contain at least one alphanumeric character or special symbol (!@#$)');

  const schema = z.object({
    username: usernameSchema,
    password: passwordSchema,
  });

  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const storedFailedAttempts = localStorage.getItem('failedAttempts');
    const storedBlockedUntil = localStorage.getItem('blockedUntil');

    if (storedFailedAttempts) setFailedAttempts(Number(storedFailedAttempts));
    if (storedBlockedUntil) setBlockedUntil(Number(storedBlockedUntil));

    if (Date.now() < Number(storedBlockedUntil)) {
      setErrorMessage('You are blocked for 5 minutes. Please try again later.');
    }
  }, []);
  const cookie=new Cookies()

  const loginMutation = useMutation({
    mutationKey: ['loginApi'],
    mutationFn: (data: ILoginApiParams) => loginApi(data),
    onSuccess: (data) => {
      const { username, accessToken } = data.data;
      setAuth(username, accessToken); // Set user info using context
      cookie.set("shoeToken",accessToken)
      console.log(username,accessToken);
      
      setErrorMessage('Login successful!');
      navigate('/home');
    },
    onError: () => {
      setErrorMessage('Login failed. Please check your credentials.');
    },
  });

  const handleLogin = (data: ILoginFormData) => {
    if (Date.now() < blockedUntil) {
      setErrorMessage('You are blocked for 5 minutes. Please try again later.');
      return;
    }

    loginMutation.mutate(data);
  };

  return (
    <div className="flex flex-col h-screen border-2 bg-gray-300">
      <div className="w-96 p-2 border-black h-screen mx-auto flex flex-col">
        <div className="flex justify-center items-center mt-28">
          <div className="text-[10rem]">
            <img src="../../public/assets/shoea.png" className="flex items-center justify-center" />
          </div>
        </div>
        <h2 className="font-semibold mt-16 text-xl">LOGIN TO YOUR ACCOUNT</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <MdEmail className="absolute text-lg left-3 mt-4 text-gray-500" />
            <input
              id="username"
              type="text"
              {...register('username')}
              placeholder="Username..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {errors.username && <div className="text-red-500 mt-2">{errors.username.message}</div>}
          </div>

          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <PiLockKeyBold className="absolute text-lg left-3 mt-4 text-gray-500" />
            <input
              id="password"
              type="password"
              {...register('password')}
              placeholder="Password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {errors.password && <div className="text-red-500 mt-2">{errors.password.message}</div>}
          </div>

          <button
            type="submit"
            disabled={Date.now() < blockedUntil}
            className="rounded-full mt-36 text-xl bg-black text-white w-full p-2"
          >
            Login
          </button>

          <div className="flex gap-16 p-4 items-center">
            <p className="text-gray-400">Don't have an account yet?</p>
            <h2 onClick={() => navigate('/register')}>Register Now</h2>
          </div>

          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
