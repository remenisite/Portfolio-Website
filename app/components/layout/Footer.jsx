import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#1e1e1e] pt-[54px] pb-[34px]'>
      <div className="container flex justify-between items-center">

        <h2 className='text-[20px] font-semibold font-main text-white'>Copyright @2026,<span className='font-kalam text-text'> remeni</span> All Rights Reserved</h2>

                <ul className="hidden md:flex space-x-6 text-[18px] font-semibold font-main text-[#ffffffa6]">

          <li><Link href="#" className="flex items-center gap-1 hover:text-text duration-300"> About</Link></li>
          <li><Link href="#" className="flex items-center gap-1 hover:text-text duration-300"> Services</Link></li>
          <li><Link href="#" className="flex items-center gap-1 hover:text-text duration-300"> Resume</Link></li>
          <li><Link href="#" className="flex items-center gap-1 hover:text-text duration-300"> Skills</Link></li>
          <li><Link href="#" className="flex items-center gap-1 hover:text-text duration-300"> Projects</Link></li>
        </ul>

      </div>
    </section>
  )
}

export default Footer