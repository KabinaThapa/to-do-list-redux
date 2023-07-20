import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/signin'
import SignUp from '../pages/signup'

import Dashboard from './../pages/dashboard';
import Protected from '../protected-routes/protected';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: 
    (<Protected><Dashboard /></Protected>),
  },
])