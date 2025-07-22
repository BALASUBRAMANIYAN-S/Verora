"use client"


import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import Link from 'next/link'
import Card from "./Card";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCard,setShowCard]=useState(false)
  

  return (
    <>
    <div className=" z-[55] fixed top-0 left-0 w-[100%]">
      {/* Top Navbar */}
      <div className="Navbar-font relative flex flex-row items-center justify-between border-b border-gray-400 pb-4 pt-3 px-4 bg-white shadow-md">
        {/* Hamburger icon */}
        <svg
          onClick={() => setMenuOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
          className="cursor-pointer"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>

        {/* Brand */}
        <Link href={'/'}>
        <h2  className="text-2xl font-semibold ml-10 fontStyleForLogo">
          Verora
        </h2></Link>

        {/* Icons */}
        <div className="flex gap-x-1">
          {/* Search, Wishlist, Cart */}
          {/* Replace with your own SVGs or icon components if needed */}
       <svg
            xmlns="http://www.w3.org/2000/svg"
           
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >  
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <Link href={'/favourite'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            //  onClick={() => {navigate('/Favourite')}}
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            onClick={()=>setShowCard(prev=>!prev)}
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Z" />
          </svg>
        </div>
      </div>   
     
  </div>
     {showCard&&<div className="fixed z-[100]  right-0 top-0">
      <Card setShowCard={setShowCard} />
      </div>}
    
      {/* Sidebar Menu */}
      {menuOpen && (
        <div className="Navbarlinks fixed top-0  left-0 w-[75%] bg-white z-[100] bottom-0 shadow-lg transition-transform duration-30 ease-in-out
        flex flex-col
        "> {/* Top section with logo and close */}
          <div className="border-b-2 mt-2 flex justify-between items-center px-4 py-2">
            <h1 className="fontStyleForLogo text-3xl font-bold ">Verora</h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-1
        overflow-auto "
        
        
        >
         
          {/* Menu Items */}
          <ul className="flex flex-col gap-4 ml-4 mt-6 text-[16px] ">
            <Link href={'/'}><li className="cursor-pointer flex items-center justify-between mr-2 hover:font-semibold">Home <span><FaChevronRight/></span></li></Link>
            <li className="cursor-pointer flex items-center justify-between mr-2 hover:font-semibold">Shop <span><FaChevronRight/></span></li>
            <li className="cursor-pointer flex items-center justify-between mr-2 hover:font-semibold">Customize <span><FaChevronRight/></span></li>
        <Link href={'/contact'}>    <li 
            className="cursor-pointer flex items-center justify-between mr-2 hover:font-semibold">Contact <span><FaChevronRight/></span></li> </Link>
            <li className="cursor-pointer flex items-center justify-between mr-2 hover:font-semibold">More Info <span><FaChevronRight/></span></li>
         
          </ul>

          {/* Social Icons */}
          <div className="mt-6 ml-4 flex gap-2 mb-4">
            <SocialIcon
              url="https://facebook.com"
              style={{ height: 32, width: 32 }}
              bgColor="black"
            />
            <SocialIcon
              url="https://instagram.com"
              style={{ height: 32, width: 32 }}
              bgColor="black"
            />
          </div>

          <div className="flex items-center mt-auto justify-center border-t-2 py-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <p className="mb-0 ">Account Login</p>
            
          </div>
</div>
        </div>
      )}
    </>
  );
}

export default Navbar;
