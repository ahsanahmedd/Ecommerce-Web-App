import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from './contexts/usercontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

        <BrowserRouter>
         <UserProvider>
         <App />
         </UserProvider>
         <ToastContainer/>
        </BrowserRouter>

)
