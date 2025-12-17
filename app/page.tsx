import React from 'react'
import Navbar from '@/src/components/navbar'
import Hero from './(home)/hero'

const page = () => {
  return (
    <>
  <div className='absolute left-0 right-0'><Navbar/></div>
    <Hero/>
    </>
  )
}

export default page