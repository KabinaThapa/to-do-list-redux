import React from 'react'
import bimg from '../assets/todo.jpg'
import '../App.css'
import {Link} from 'react-router-dom'

const home = () => {
  return (
    <>
    <div className='bgimg w-full h-screen flex items-center'>
      <div className='w-96 h-96 flex flex-col items-center mx-auto text-lg font-medium p-8 text-blue-900'>
        <h1 className='mb-1 text-3xl font-medium'>TodoWorx</h1>
        <p className='text-xl'>Simplify Your Productivity</p>
        <Link to='/sign-in' className='mt-auto text-3xl'><button className='border-2 rounded-md p-2 border-black backdrop-blur-sm'>Get Started</button></Link>
        </div>
    </div>
    </>
  )
}

export default home