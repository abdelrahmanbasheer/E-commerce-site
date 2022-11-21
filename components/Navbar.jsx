import React, { useState } from 'react'
import Link from "next/link"
const Navbar = ({color}) => {

  return (
    <div className=' text-red-700 p-5 sm:``'>
    <div className="flex justify-between  items-center gap-4 ">
        <div className="flex items-center gap-12">
    <Link href={"/"}>
       <h1 className='font-bold text-white text-3xl cursor-pointer  transition duration-300 ease hover:text-red-700'>Canadian <span className='text-red-700 hover:text-white transition duration-300 ease'>Bears</span></h1>
       </Link>
    <Link href={"/women"}>
        <p className='text-black font-bold text-xl cursor-pointer transition duration-300 ease hover:text-red-700'>Women</p>
        </Link>
        <Link href={"/men"}>
        <p className='text-black font-bold text-xl cursor-pointer transition duration-300 ease hover:text-red-700'>Men</p>
        </Link>
        <Link href={"/shoes"}>
        <p className='text-black font-bold text-xl cursor-pointer transition duration-300 ease hover:text-red-700'>Shoes</p>
        </Link>
        </div>
       <div className="flex gap-9  justify-center">

        {/* shopping cart */}
       <svg className='cursor-pointer'width="24"height="24"viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg"
><path fill-rule="evenodd"clip-rule="evenodd"d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
    fill="black"/></svg>
        {/* shopping cart */} 

{/* avatar */}
<svg width="28" className='cursor-pointer' height="28" viewBox="0 0 28 28" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"clip-rule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"fill="black"/><path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"fill="black"/></svg>
{/* avatar */}

        </div>
    </div>
  </div>
  )
}

export default Navbar