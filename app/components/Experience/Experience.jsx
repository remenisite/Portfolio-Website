import React from 'react'
import Accordion from '../utils/Accordion'

const Experience = () => {



  return (
    <>

    <section className='pt-[130px]'>
      <div className="container">
        <div className='text-center'>
        <h2 className="text-[24px]  fonr-normal font-main text-white">
          My <span className="text-text"> Resume</span>
        </h2>
        <h3 className="text-[40px] font-medium font-main text-white mt-[12px] mb-[64px]">
          Real  <span className='text-text'>Problem Solutions</span> <br /> Experience

        </h3>
        </div>

        <div className=' pt-[60px] flex justify-between'>


        <div>
          <div className='text-center mb-[55px]'><h2 className='text-[30px] font-bold font-main text-white'>Education</h2></div>
          <Accordion   title="H.s.c" h2="Dhaka Board" content="" />
          <Accordion   title="National University" h2="bachelor in business management" content="I am currently studying Management at National University." />
        </div>
        <div>
          <div className='text-center mb-[55px]'><h2 className='text-[30px] font-bold font-main text-white'>Experience</h2></div>

          <Accordion   title="Shorten Your Links" h2="Fast & Secure" p="Since 2024"content="This URL shortener helps you create short, shareable links instantly." />
          <Accordion   title="Shorten Your Links" h2="Fast & Secure" p="Since 2024"content="This URL shortener helps you create short, shareable links instantly." />
        </div>
        </div>
      </div>

    </section>
  

    </>
  )
}

export default Experience