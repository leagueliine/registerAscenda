import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/login-user-page'
import { RegisterPage } from './pages/login-empresa-page'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LoginPage />
//   },

//   {
//     path: 'register',
//     element: <RegisterPage />
//   }
// ])


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/caduser',
        element: <LoginPage />
      },
      {
        path: 'cadempresa',
        element: <RegisterPage />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
