import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Assets from '../Pages/Dashboard/AssetsPage/Index'
import Companies from '../Pages/Dashboard/Companies/Index'
import Dashboard from '../Pages/Dashboard/Home/Index'
import Units from '../Pages/Dashboard/Units/Index'
import Users from '../Pages/Dashboard/Users/Index'
import Login from '../Pages/Login/Index'




export const Rota = () => {
    return (
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/Assets' element={<Assets/>}/>
                <Route path='/companies' element={<Companies/>}/>
                <Route path='/units' element={<Units/>}/>
                <Route path='/users' element={<Users/>}/>
             </Routes>
    )
}
