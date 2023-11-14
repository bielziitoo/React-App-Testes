import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* import 'bootstrap/dist/css/bootstrap.css' */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <App></App>},
      {path: '/home', element: <Home></Home>},
      {path: '/contato', element: <Contact></Contact>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
