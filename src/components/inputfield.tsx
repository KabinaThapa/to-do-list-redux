import React from 'react'
import { Field, ErrorMessage } from 'formik';

interface IInputfield{
    label:string,
    name:string,
    type?:string|boolean,
    className?:string,
}

const Inputfield:React.FC<IInputfield> = ({label,name,type,className}) => {
  return (
    <div className={className}>
        <label htmlFor={name}>{label}</label>
        <Field type={type} name={name} className='flex flex-col bg-transparent border-b-2 border-green-700 w-full' />
        <ErrorMessage name={name} className='text-red-600' component='div'/>
    </div>
  )
}

export default Inputfield