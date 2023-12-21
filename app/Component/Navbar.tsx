'use client'
import React from 'react'
import logo from '../images/grand-logo.png' //  ../images/grand-logo.png https://ibb.co/dgfX2Vv
import Image from 'next/image'
import { useRouter,usePathname } from 'next/navigation'

const Navbar = () => {
    const router=useRouter()
    const pathname:string=usePathname()
  return (
    <div className='fixed top-0 shadow-xl h-[40px] w-full flex justify-between bg-white'>
        <div className='flex'>
            {/*<Image src={logo} className='h-12 w-12 ml-4' alt='img'/>*/}
            <img src="https://i.ibb.co/dgfX2Vv/grand-logo-dc7baabf.png" className='h-12 w-12 ml-4' alt="grand-logo-dc7baabf" />
            <h1 className='mt-3 text-md font-sans font-bold ml-3 text-gray-700'>WORK SCHEDULER</h1>
        </div>
    </div>
  )
}

export default Navbar