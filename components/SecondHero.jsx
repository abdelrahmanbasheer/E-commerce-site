import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { spring } from '../utils/icons'

const SecondHero = () => {
  return (
    <div className='mt-10  bg-white p-7  justify-center'>
   <div className="grid grid-cols-2 gap-5">
    {spring.map((spr)=>(
        <div className="">
        <Link href={"/men" || "/women"} >
<Image src={spr.src} width={800} height={500} className="cursor-pointer rounded-xl "></Image>
</Link>
<h1 className='text-center text-xl m-2 capitalize font-semibold'>{spr.title}</h1>

</div>
    ))}
   </div>
        </div>
  )
}

export default SecondHero
