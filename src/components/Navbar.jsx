import React, { useState } from 'react';
import logo from '../assets/budget_logo.png';
import avatar from '../assets/avatar.png';
import './style.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Dashboard'); // Initial active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link when a link is clicked
  };

  return (
    <div className='flex justify-between'>
      <div className='flex bg-[#28696A] ml-5 mt-5 pl-10 pr-10 py-3 skew-container '>
        <img src={logo} alt='logo' />
      </div>
      <div className="flex justify-between w-96 pt-14 nav-links">
        <h1
          className={activeLink === 'Dashboard' ? 'nav-link active-link' : 'nav-link'}
          onClick={() => handleLinkClick('Dashboard')}
        >
          Dashboard
        </h1>
        <h1
          className={activeLink === 'Income' ? 'nav-link active-link' : 'nav-link'}
          onClick={() => handleLinkClick('Income')}
        >
          Income
        </h1>
        <h1
          className={activeLink === 'Expenses' ? 'nav-link active-link' : 'nav-link'}
          onClick={() => handleLinkClick('Expenses')}
        >
          Expenses
        </h1>
        <h1
          className={activeLink === 'Goals' ? 'nav-link active-link' : 'nav-link'}
          onClick={() => handleLinkClick('Goals')}
        >
          Goals
        </h1>
      </div>
      <div className="flex">
        <img src={avatar} alt="profile" className=' h-10 mr-10 mt-10 ' title='profile image' />
      </div>
    </div>
  );
};

export default Navbar;
