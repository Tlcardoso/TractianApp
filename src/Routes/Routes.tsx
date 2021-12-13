import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Assets from '../Pages/Dashboard/AssetsPage/Index'
import Dashboard from '../Pages/Dashboard/Home/Index'
import Home from '../Pages/Dashboard/Home/Index'
import Login from '../Pages/Login/Index'




export const Rota = () => {
    return (
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/Assets' element={<Assets/>}/>
                <Route path='/teste' element={<Dashboard/>}/>
                <Route path='/teste2' element={<Dashboard/>}/>
             </Routes>
    )
}
