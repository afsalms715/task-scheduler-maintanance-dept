'use client'
import React from 'react'
import logo from '../images/grand-logo.png'
import Image from 'next/image'
import { useRouter,usePathname } from 'next/navigation'

const Navbar = () => {
    const router=useRouter()
    const pathname:string=usePathname()
    const logout=()=>{
        sessionStorage.setItem('userid','')
        sessionStorage.setItem('password','')
        router.push('/Login')
    }

  return (
    <div className='fixed top-0 shadow-xl h-[40px] w-full flex justify-between'>
        <div className='flex'>
            <Image src={logo} className='h-12 w-12 ml-4' alt='img'/>
            <h1 className='mt-3 text-md font-sans font-bold ml-3 text-gray-700'>Work Scheduler</h1>
        </div>
    </div>
  )
}

export default Navbar