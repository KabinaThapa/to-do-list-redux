import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/signin'
import SignUp from '../pages/signup'
import {motion} from 'framer-motion'

import Dashboard from './../pages/dashboard';
import Protected from '../protected-routes/protected';


export const router = createBrowserRouter(
  
  [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: 
    <motion.div
        initial={{ opacity: 1, x:-300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
      ><SignIn /></motion.div>,
  },
  {
    path: '/sign-up',
    element:  <motion.div
    initial={{ opacity: 1, x:-300 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 1 }}
  ><SignUp /></motion.div>,
  },
  {
    path: '/dashboard',
    element: 
    (<Protected><Dashboard /></Protected>),
  },
])