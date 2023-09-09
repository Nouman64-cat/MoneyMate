import React, { useState } from 'react';
import './style.css'

import { Link } from 'react-router-dom';

import logo from '../assets/budget_logo.png'
import main_image from '../assets/main_image.png'
import stone from '../assets/stone.png'

import { MdContentCopy, MdCheck } from 'react-icons/md'; // Import the green tick icon
import { CopyToClipboard } from 'react-copy-to-clipboard'; // Import React Copy to Clipboard
import { Tooltip } from '@mui/material'; // Import Material-UI Tooltip

import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [generatedUsername, setGeneratedUsername] = useState("")
  const [copied, setCopied] = useState(false);
   const generateUsername = (fullName) => {
    return fullName.replace(/\s+/g, '').toLowerCase() + Math.floor(100 + Math.random() * 900);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register/user", {
        fullName: fullName,
        email: email,
        password: password,
        username: generatedUsername,
      })
      if (response.status === 200) {
        window.location.replace("/login");
      }
      console.log("registration successful")
    } catch (error) {
      console.log(error)
    }
  }

  const handleFullNameChange = (e) => {
    const newName = e.target.value;
    setFullName(newName);
    const newGeneratedUsername = newName.trim() === '' ? '' : generateUsername(newName);
    setGeneratedUsername(newGeneratedUsername);
  };


  const handleCopyClick = () => {
    if (generatedUsername) {
      navigator.clipboard.writeText(generatedUsername)
        .then(() => setCopied(true))
        .catch((err) => console.error('Failed to copy: ', err));

      setTimeout(() => setCopied(false), 2000); // Reset 'copied' state after 1 second
    }
  };

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
          <h2 className="text-[#6F5834] text-5xl mb-3 font-bold">Manage your finances</h2>
          <h2 className="text-[#6F5834] text-2xl font-bold">Create Account</h2>
          <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
             {generatedUsername && (
            <div className="text-center text-white mt-5 bg-[#28696A] rounded-lg py-2 flex items-center justify-center">
              <h1 className="text-white">Your username: {generatedUsername}</h1>
              <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'} placement="top">
                <div
                  className="cursor-pointer text-green-500 hover:text-green-700 ml-2"
                  onClick={handleCopyClick}
                >
                  {copied ? <MdCheck className="text-xl" /> : <MdContentCopy className="text-xl" />}
                </div>
              </Tooltip>
            </div>
          )}
            <input
              type="text"
              placeholder="Full Name"
              className="input-filled w-full h-10 mt-5 pl-2 border-b border-[#CFBFA6] outline-none placeholder-[#B49667] text-gray-800 bg-transparent"
             onChange={handleFullNameChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-filled w-full h-10 mt-10 pl-2 border-b border-[#CFBFA6] outline-none placeholder-[#B49667] text-gray-800 bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
  type="password"
  placeholder="Password"
  className=" input-filled w-full h-10 mt-10 pl-2 border-b border-[#CFBFA6] outline-none placeholder-[#B49667] text-gray-800 bg-transparent"
  onChange={(e) => setPassword(e.target.value)}
/>
          <button type="submit" className='w-full bg-[#28696A] py-2 mt-6 rounded-lg hover:bg-[#32868e]'>
            <h1 className='text-white'>Create Account</h1>
          </button>
          <div className="flex justify-center mt-1">
          <p className="text-[#6F5834] mt-4">Already have an account? 
          <Link to="/login" className="hover:underline"><span className="text-[#28696A]">Login</span></Link></p>
          </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
