import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/signin'
import SignUp from '../pages/signup'
import Main from '../pages/main'


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
    path: '/main',
    element: <Main />,
  },
])