import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { icons } from '../utils/icons'
const FranchiseIcons = () => {

  return (
    <div className='bg-black '>
        
        <h1 className='text-white text-6xl m-10 '>Start Shopping Now!</h1>
        <ul className='flex gap-8 items-center justify-center '>
     {icons.map((icon)=>(
       <Link href={icon.path}>
    <li className='  w-[400px] h-[400px] cursor-pointer transition duration-300 ease hover:scale-105'>
        <Image src={icon.src.src} width={400} className=" rounded-3xl max-h-[370px] " height={350} loading="lazy"/>
        <h1 className=' text-center text-xl text-white font-bold '>{icon.title}</h1>
        </li>
        </Link>
     ))}
      </ul>
    </div>
    
  )
}

export default FranchiseIcons
//flex array of objects feh el src we alt we title map el array 