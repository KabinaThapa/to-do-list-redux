import React from 'react'

import '../App.css'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion"

const home = () => {
  return (
    <>
    <motion.div className='bgimg w-full h-screen flex items-center'
    initial={{opacity:5,y:0}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:100}}
    transition={{duration:2}}>

      <motion.div className='w-[40%] h-screen flex flex-col items-center mx-auto text-lg font-medium p-8 text-blue-900 border-l-2 border-r-2  bg-white bg-opacity-50' 
      initial={{y:-500}}
      animate={{y:0}}
      transition={{duration:1, delay:0.3}}>
        <h1 className='mb-1 text-4xl font-medium'>TodoWorx</h1>
        <p className='text-xl'>Simplify Your Productivity</p>
        <Link to='/sign-in' className='mt-auto text-3xl'><button className='border-2 rounded-lg p-2 border-black backdrop-blur-lg bg-white bg-opacity-50 hover:scale-110'>Get Started</button></Link>
        </motion.div>
    
    </motion.div>
    </>
  )
}

export default home