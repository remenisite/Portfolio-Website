// import React from 'react'
// import navlogo from '../assets/images/solid.png'
// import { Link } from 'react-router'
// import { PiSignOutBold } from "react-icons/pi";
// import { LuUser } from "react-icons/lu";
// import { PiToggleLeftFill } from "react-icons/pi";

// const Navbar = () => {
//   return (
//     <>
    
//     <nav id='navbar'>
//         <div className="container">
//             <div id='navbar-row' className='flex justify-between items-center py-[16px]'>
//               {/* ----------- nav-logo  */}
//               <Link to={'/'}   ><img src={navlogo} alt="nav-logo" /></Link>
              
//               {/* -------------- nav-items */}
//               <div>
//                 <ul className='flex items-center gap-[24px]'>
//                   <li><Link to={'/'}k   className='text-[16px] font-semibold font-main text-primary'>Features</Link></li>
//                   <li><Link to={'/'}k   className='text-[16px] font-semibold font-main text-primary'>Overview</Link></li>
//                   <li><Link to={'/'}   className='text-[16px] font-semibold font-main text-primary'>Blog</Link></li>
//                   <li><Link to={'/'}   className='text-[16px] font-semibold font-main text-primary'>Contact</Link></li>
//                 </ul>
//               </div>
//               {/* ------------- mode */}
//               <div className='flex gap-[16px] items-center'>
//                 <h2 className='text-[16px] font-semibold font-main text-[#585C7B]'>Light</h2>
//                 <button><PiToggleLeftFill className='text-[46px] text-[#6366F1]' /></button>
//                 <h2 className='text-[16px] font-semibold font-main text-[#585C7B]'>Dark</h2>
//               </div>
//               {/* -------------- login + sign up */}
//               <div className='flex gap-[16px] items-center'>
//                 <Link to={'/'}   className='w-[111px] bg-[#EFF2FC] hover:bg-[#6366F1] rounded-[4px] flex gap-[8px] items-center justify-center py-[9px] text-[14px] font-semibold font-main text-primary hover:text-[#fff]' > <PiSignOutBold className='text-[18px] hover:text-[#fff]' /> Sign in</Link>
//                 <Link to={'/'}   className='w-[116px] bg-[#EFF2FC] hover:bg-[#6366F1] rounded-[4px] flex gap-[8px] items-center justify-center py-[9px] text-[14px] font-semibold font-main text-primary hover:text-[#fff]' >     <LuUser className='text-[18px] hover:text-[#fff]' /> Sign up</Link>
//                 </div>
//             </div>
//         </div>
//     </nav>
    
    
//     </>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import navlogo from '../assets/images/solid.png';
import { Link } from 'react-router';
import { PiSignOutBold, PiToggleLeftFill } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav id="navbar" className="w-full shadow-md bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* LOGO */}
          <Link to="/">
            <img src={navlogo} alt="nav-logo" className="w-[120px]" />
          </Link>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button 
            className="md:hidden text-3xl text-primary"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* NAV ITEMS (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li><Link className="text-[16px] font-semibold text-primary">Features</Link></li>
              <li><Link className="text-[16px] font-semibold text-primary">Overview</Link></li>
              <li><Link className="text-[16px] font-semibold text-primary">Blog</Link></li>
              <li><Link className="text-[16px] font-semibold text-primary">Contact</Link></li>
            </ul>

            {/* Mode Switch */}
            <div className="flex gap-2 items-center">
              <h2 className="text-[16px] font-semibold text-[#585C7B]">Light</h2>
              <button><PiToggleLeftFill className="text-[40px] text-[#6366F1]" /></button>
              <h2 className="text-[16px] font-semibold text-[#585C7B]">Dark</h2>
            </div>

            {/* Login Buttons */}
            <div className="flex gap-4 items-center">
              <Link className="w-[111px] bg-[#EFF2FC] hover:bg-[#6366F1] rounded-md flex gap-2 justify-center py-2 text-[14px] font-semibold text-primary hover:text-white">
                <PiSignOutBold className="text-[18px]" /> Sign in
              </Link>
              <Link className="w-[116px] bg-[#EFF2FC] hover:bg-[#6366F1] rounded-md flex gap-2 justify-center py-2 text-[14px] font-semibold text-primary hover:text-white">
                <LuUser className="text-[18px]" /> Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-6 py-4 animate__animated animate__fadeIn">
            <ul className="flex flex-col gap-4">
              <li><Link className="text-[16px] font-semibold text-primary">Features</Link></li>
              <li><Link className="text-[16px] font-semibold text-primary">Overview</Link></li>
              <li><Link className="text-[16px] font-semibold text-primary">Blog</Link></li>
              <li><Link className="text-[16px] font-semibold text-primary">Contact</Link></li>
            </ul>

            {/* Mode Switch */}
            <div className="flex gap-4 items-center">
              <h2 className="text-[16px] font-semibold text-[#585C7B]">Light</h2>
              <button><PiToggleLeftFill className="text-[40px] text-[#6366F1]" /></button>
              <h2 className="text-[16px] font-semibold text-[#585C7B]">Dark</h2>
            </div>

            {/* Login Buttons */}
            <div className="flex flex-col gap-4">
              <Link className="w-full bg-[#EFF2FC] hover:bg-[#6366F1] rounded-md flex gap-2 justify-center py-2 text-[14px] font-semibold text-primary hover:text-white">
                <PiSignOutBold className="text-[18px]" /> Sign in
              </Link>
              <Link className="w-full bg-[#EFF2FC] hover:bg-[#6366F1] rounded-md flex gap-2 justify-center py-2 text-[14px] font-semibold text-primary hover:text-white">
                <LuUser className="text-[18px]" /> Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
