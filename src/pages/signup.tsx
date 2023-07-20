import React from 'react'
import Inputfield from '../components/inputfield'

import { useNavigate } from 'react-router-dom';
import { Formik,Form } from 'formik';
import * as Yup from 'yup'

const signup = () => {
    const initialvalues={
        name:'',
        username:'',
        email:'',
        password:'',
        confirmpassword:'',
        checkbox:false,

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
        navigate('/Loginpage')

    }

  return (
    <div className='flex flex-col backdrop-blur-sm justify-center items-center p-4 h-auto w-[50%] mx-auto mt-12  border-2'>
        <h1 className='text-3xl mb-4 mt-4'>REGISTER</h1>
        <Formik 
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>

            <Form className=' flex flex-col p-4 '>
                <Inputfield type='text' name='name' label='Name'/>
                <Inputfield type='text' name='username' label='Username'/>
                <Inputfield type='text' name='email' label='Email'/>
                <Inputfield type='password' name='password' label='Password'/>
                <Inputfield type='password' name='confirmpassword' label='Confirm Password'/>
                <Inputfield type='checkbox' name='checkbox' label='Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings. '/>
                <button type='submit' className='border-2'>Register</button>

            </Form>

        </Formik>
    </div>
  )
}

export default signup