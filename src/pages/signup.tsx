import React from 'react'
import Inputfield from '../components/inputfield'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Formik,Form } from 'formik';
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { FiUser } from 'react-icons/fi';
import { BsLock } from 'react-icons/bs';
import {AiOutlineMail } from 'react-icons/ai';


const signup = () => {
    const initialvalues={
        name:'',
        username:'',
        email:'',
        password:'',
        confirmpassword:'',
       

    }
    const validationSchema=Yup.object({
        name:Yup.string().required('Please enter your Name.'),
        username:Yup.string().required('Please enter your username.'),
        email:Yup.string().required('Please enter valid email address.'),
        password:Yup.string().required('Please enter correct password'),
        confirmpassword:Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], 'Password must match'),
        checkbox:Yup.boolean().oneOf([true],'Please accept all the terms and conditions.')
    })
    const navigate=useNavigate()
    const handleSubmit=(values:typeof initialvalues)=>{
        axios.post(' http://localhost:3000/users', {email:values.email, password:values.password})
        .then((response)=>{toast.success('Scuccessfully created your account.')
        navigate('/sign-in')
        localStorage.setItem('session-token', response.data.accessToken)
    })

        .catch(()=>{toast.error('Could not sign in')})
       

    }

  return (
    <div className='bgimg h-screen flex justify-center items-center'>
        
        <Formik 
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center w-full h-screen backdrop-blur-sm text-blue-900 font-medium'>
            <Form className='w-[30%] h-screen bg-white p-8 flex flex-col justify-center'>
            <h1 className='text-3xl mb-4 mt-4'>REGISTER</h1>
                <Inputfield type='text' name='name' label='Name'icon={<FiUser/>}/>
                <Inputfield type='text' name='username' label='Username'icon={<FiUser/>}/>
                <Inputfield type='text' name='email' label='Email'icon={<AiOutlineMail/>}/>
                <Inputfield type='password' name='password' label='Password'icon={<BsLock/>}/>
                <Inputfield type='password' name='confirmpassword' label='Confirm Password' icon={<BsLock/>}/>
             
                <button type='submit' className='border-2 w-full mb-6 border-black p-1 rounded-md text-lg'>Register</button>

            </Form>
</div>
        </Formik>
    </div>
  )
}

export default signup