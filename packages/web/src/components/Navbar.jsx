import React, { useState } from 'react';
import ftLogo from '../assets/friendlytax_logo.png'

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', url:"/"},
    { id: 2, text: 'Pricing', url:"/pricing"},
    { id: 3, text: 'Register', url:"/register"},
    { id: 4, text: 'Login', url:"/login" },
  ];

  return (

    <nav className='bg-[#ffd944] flex flex-wrap md:flex-nowrap justify-between items-center max-w-[1240px] mx-auto px-4 text-white ' >
      
      {/* Logo */}
      <div className='flex flex-wrap items-center '>
        <img  className='mr-4 ml-5' src={ftLogo}  style={{borderRadius:"50%", height:35, width:35}}/>
      <a href="/">
      <h1 className='w-full text-2xl font-bold text-[#333333]' >Friendly Tax</h1>
      </a>
      </div>
      {/* Desktop Navigation */}

      <div className='hidden md:flex flex items-center'>
        {navItems.map(item => (
          <a
            key={item.id}
            href={item.url}
            className='p-4 text-black font-normal cursor-pointer hover:font-bold'
          >
            {item.text}
          </a>
          
        ))}
      <img className="object-fit ml-4 mr-5" src="https://cdn.britannica.com/38/4038-004-111388C2/Flag-Thailand.jpg"   style={{borderRadius:"50%", height:35, width:35}} />
        </div>
    </nav>
  );
};

export default Navbar;