import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import Inputfield from '../components/inputfield'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Link, useNavigate } from 'react-router-dom'
import { FiUser } from 'react-icons/fi';
import { BsLock } from 'react-icons/bs';
import {PiGoogleLogo  } from 'react-icons/pi';
import { CiFacebook,CiTwitter } from 'react-icons/ci';


const signin = () => {
    const initialvalues={
        email:'',
        password:'',
       
    }
    const validationSchema=Yup.object({
        email:Yup.string().required('Please enter valid email address.'),
        password:Yup.string().required('Please enter correct password'),
        checkbox:Yup.boolean().oneOf([true],'Please accept all the terms and conditions.')
    })
    const navigate=useNavigate()
    const handleSubmit=(values:typeof initialvalues)=>{
        axios.post(' http://localhost:3000/login', {email:values.email, password:values.password})
        .then((response)=>{toast.success('Scuccessfully signed in')
        console.log(response.data)
       navigate('/dashboard')
        localStorage.setItem('session-token',response.data.accessToken)
    })

        .catch(()=>{toast.error('Could not sign in')
    })

        

    }

  return (
    <div className='bgimg h-screen flex justify-center items-center'>
        <Formik 
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} >
            {()=>{
                return(
                    <div className='flex flex-col justify-center items-center w-full h-screen backdrop-blur-sm text-blue-900 font-medium'>
                       
                        <Form className='w-[30%] h-screen bg-white bg-opacity-50 border-l-2 border-r-2 p-8 flex flex-col justify-center'>
                        <h1 className='text-3xl mb-4'>LOGIN</h1>
                           <Inputfield type='text' name='email' label='Email Address' icon={<FiUser/>} />
                           <Inputfield type='password' name='password' label='Password' icon={<BsLock/>} />
                           <p className='text-right mb-8'>Forgot Password?</p>
                        
                          
                           <button type='submit' className='border-2 w-full mb-6 border-black p-1 rounded-md text-lg'> LogIn</button>
                          <Link to='/sign-up' className='text-center underline mb-4'>Don't have an Account? Sign Up</Link>
                           <p className='text-center mb-4'>OR</p>
                           <p className='text-center'>Sign Up Using</p>
                           <div className='flex items-center justify-between w-24 mx-auto mt-4'>
                            <CiFacebook size={35}/>
                            <PiGoogleLogo size={35}/>
                            <CiTwitter size={38}/>

                           </div>

                        </Form>
                        <ToastContainer className='ml-auto'/>
                    </div>
                )

            }}

        </Formik>
    </div>
  )
}

export default signin