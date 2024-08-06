
import React from 'react'
import { Outlet, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from '../components/home'
import Register from '../components/register';
import Login from '../components/login';


const routes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            
            
            </Routes>    
    )
}


export default routes