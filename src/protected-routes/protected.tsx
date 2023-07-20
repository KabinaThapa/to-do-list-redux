import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}:{children:React.ReactNode}) => {
   
    const token=localStorage.getItem('session-token')
  if(token){
    return <div>{children}</div>}
    return <Navigate to='/'/>
  
}

export default Protected