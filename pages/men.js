import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

import hollister_spring from "../public/images/spring-1.jpg"
import americaneagle_spring from "../public/images/spring-2.jpeg"
import armani_spring from "../public/images/spring-3.jpg"
import uspolo_spring from "../public/images/spring04.jpg"
const men = () => {
  const clothes=[
    {
      title:"shirt-1",
      img:americaneagle_spring,
      price:"18.99$",
      id:"1",

    },
    {
      title:"shirt-2",
      img:hollister_spring,
      price:"18.99$",
      id:"2",

    },
    {
      title:"shirt-3",
      img:armani_spring,
      price:"18.99$",
      id:"3",

    },
    {
      title:"shirt-4",
      img:uspolo_spring,
      price:"18.99$",
      id:"4",

    },
    
    {
      title:"shirt-4",
      img:uspolo_spring,
      price:"18.99$",
      id:"4",

    },


  ]
  return (
    <div className="">
    <div className='sm:bg-men bg-men-mobile w-[700px]  md:w-[100%]  h-[700px]'>
      <Navbar color={"black"}></Navbar>
 
    </div>
         <div className="bg-black ">
        <div className="flex gap-20 p-5 justify-center">
     <button className='text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full'>Shirts</button>
     <button className='text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full'>Pants</button>
     <button className='text-white bg-red-800 p-4 
      font-semibold w-[90px] rounded-full'>Jackets</button>
        </div>
       
        <ul className="flex flex-wrap justify-center">
        {clothes.map((cloth)=>(
          
          <Link key={cloth.title} href={`/men/${cloth.id}`}>
          <li className=' m-5 '>
            <img className='cursor-pointer rounded-t-lg w-[400px] h-[300px]' src={cloth.img.src} alt={cloth.title} />
          <div   className='bg-white font-semibold h-[60px] rounded-b-lg p-2'>
            <h1 className='ml-4'>{cloth.title}</h1>
            <h3>{cloth.price}</h3>
          </div>
          
          
          
          </li>
          </Link>
          
        ))}
        

        </ul>
      
         </div>
         </div>
  )
}

export default men

