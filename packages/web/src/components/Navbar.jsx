import React, { useState } from 'react';
import ftLogo from '../assets/friendlytax_logo.webp'
import CompanyIcon from "../assets/bluebridge_icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faDatabase, faCaretDown, faAnglesDown } from "@fortawesome/free-solid-svg-icons";

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
    { id: 3, text: 'Sign Up', url:"/register"},
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

        <div className="dropdown dropdown-hover">
          <div className='flex flex-row items-center'>
            <div tabIndex={0} role="button" className="m-1 text-black">App</div>
            <FontAwesomeIcon icon={faCaretDown} size='lg' color='black'/>
          </div>
          <ul tabIndex={0} className="z-[1] dropdown-content menu p-2 bg-white rounded-box w-52 text-black">
            <li>
              <div className='flex flex-row'>
                <FontAwesomeIcon icon={faDatabase} size='lg' color='black'/>
                <a href='/app/financial-record'>Financial Record</a>
              </div>
            </li>
            <li>
              <div className='flex flex-row'>
                <FontAwesomeIcon icon={faCalculator} size='lg' color='black'/>
                <a href='/app/tax-calculator'>Tax Calculator</a>
              </div>
            </li>
            <li>
              <div className='flex flex-row'>
                <FontAwesomeIcon icon={faAnglesDown} size='lg' color='black'/>
                <a href='/app/tax-reduction'>Tax-reduction</a>
              </div>
            </li>
          </ul>
        </div>
        <img className="object-fit ml-4 mr-5" src={CompanyIcon} onClick={()=> window.open("http://localhost:5173/app/profile")}  style={{borderRadius:"50%", height:35, width:35}} />
        </div>
    </nav>
  );
};

export default Navbar;