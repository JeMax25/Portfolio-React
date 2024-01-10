import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ContactPage } from '../pages/ContactPage'

export const PortfolioRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='contact' element={<ContactPage/>}></Route>

        <Route path='/*' element={<Navigate to='/'/>}></Route>
    </Routes>
  )
}
