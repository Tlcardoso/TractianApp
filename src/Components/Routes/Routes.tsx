import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Login/Index'
import Home from '../../Pages/Dashboard/Home/Index'



export const Rota = () => {
    return (
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/teste' element={<Home/>}/>
             </Routes>
    )
}
