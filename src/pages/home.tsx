import React from 'react'
import bimg from '../assets/todo.jpg'
import '../App.css'
import {Link} from 'react-router-dom'

const home = () => {
  return (
    <>
    <div className='bgimg w-full h-screen flex flex-col mt-12 items-center text-lg font-bold'>
        <h1 className='mb-6'>TodoWorx</h1>
        <p>Simplify Your Productivity</p>
        <Link to='/sign-in'>Get Started</Link>
    </div>
    </>
  )
}

export default home