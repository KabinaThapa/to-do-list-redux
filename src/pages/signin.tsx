import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import Inputfield from '../components/inputfield'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'

const signin = () => {
    const initialvalues={
        email:'',
        password:'',
        checkbox:false,
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
        navigate('/dashboard')
        localStorage.setItem('session-token', response.data.accessToken)
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
                    <div className='flex flex-col justify-center items-center w-full h-screen backdrop-blur-sm text-blue-900'>
                       <h1 className='text-3xl mb-4'>LOGIN</h1>
                        <Form className='w-[30%]'>
                           <Inputfield type='text' name='email' label='Email Address' />
                           <Inputfield type='password' name='password' label='Password'/>
                          
                        
                          
                           <button type='submit' className='border-2 w-full mt-4'> Login</button>
                           

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