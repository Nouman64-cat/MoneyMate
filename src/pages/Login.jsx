import React, { useContext, useRef, useState } from 'react';
import './style.css'

import { Link } from 'react-router-dom';

import logo from '../assets/budget_logo.png'
import main_image from '../assets/main_image.png'
import stone from '../assets/stone.png'
import { Context } from '../context/Context';

import axios from 'axios';

const Login = () => {

  

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post('http://localhost:5000/api/login/user', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      if (response.status === 200) {
        console.log("login successful")
        // window.location.replace("/dashboard");
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
      console.log(error)
      dispatch({ type: "LOGIN_FAILURE" })
    }
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }


  return (
    <div
      className="flex"
    >
      <div className='flex flex-col bg-[#28696A] h-[100vh] w-[30rem] '>
<img src={logo} alt="logo" className=" w-[6rem] ml-10 mt-10"/>
<h1 className="text-white ml-10 mt-10 text-2xl leading-8"><span className="font-bold">Leading </span>you to</h1>
<h1 className="text-white ml-10 mt-2 text-2xl leading-8">Financial <span className="font-bold">Independence</span></h1>
<img src={main_image} alt="logo" className="relative  bottom-0 w-[36rem] ml-[7rem] mt-[3rem] "/>
<img src={stone} alt="logo" className="relative  bottom-0 w-[8rem] ml-[9rem] "/>
      </div>
      <div className='flex justify-center items-center bg-[#F0E6D7] h-[100vh] w-full register-container'>
        <div className="flex flex-col items-center align-center justify-center w-full ">
          <h2 className="text-[#6F5834] text-5xl mb-3 font-bold">We know it's you</h2>
          <h2 className="text-[#6F5834] text-2xl font-bold">Sign in to your Account</h2>
          <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="input-filled w-full h-10 mt-10 pl-2 border-b border-[#CFBFA6] outline-none placeholder-[#B49667] text-gray-800 bg-transparent"
              ref={userRef}
            />
            {/* <input
              type="email"
              placeholder="Email"
              className="input-filled w-full h-10 mt-10 pl-2 border-b border-[#CFBFA6] outline-none placeholder-[#B49667] text-gray-800 bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            <input
  type="password"
  placeholder="Password"
  className=" input-filled w-full h-10 mt-10 pl-2 border-b border-[#CFBFA6] outline-none placeholder-[#B49667] text-gray-800 bg-transparent"
  ref={passwordRef}
/>
          <button type="submit" className='w-full bg-[#28696A] py-2 mt-6 rounded-lg hover:bg-[#32868e]'>
            <h1 className='text-white'>Login</h1>
          </button>
          <div className="flex justify-center mt-1">
          <p className="text-[#6F5834] mt-4">Don't have an account? 
          <Link to="/" className="hover:underline"><span className="text-[#28696A]">Create Account</span></Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
