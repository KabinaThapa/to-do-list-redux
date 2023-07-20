import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import Inputfield from '../components/inputfield'

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const signin = () => {
    const initialvalues={
        emailAddress:'',
        password:'',
        checkbox:false,
    }
    const validationSchema=Yup.object({
        emailAddress:Yup.string().required('Please enter valid email address.'),
        password:Yup.string().required('Please enter correct password'),
        checkbox:Yup.boolean().oneOf([true],'Please accept all the terms and conditions.')
    })
    const handleSubmit=(values:typeof initialvalues)=>{
        toast.success('Account scuccessfully created')

    }

  return (
    <div className='flex justify-center items-center text-black '>
        <Formik 
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} >
            {()=>{
                return(
                    <div className='flex flex-col justify-center p-4  h-96 border-2 w-[50%] mt-12 backdrop-blur-sm'>
                       <h1 className='text-3xl mb-4'>LOGIN</h1>
                        <Form>
                           <Inputfield type='text' name='emailAddress' label='Email Address'/>
                           <Inputfield type='password' name='password' label='Password'/>
                           <Inputfield type='checkbox' name='checkbox' label='I accept all terms and conditions.'/>
                           <button type='submit' className='border-2 w-full'> Login</button>

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