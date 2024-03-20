import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import '../index.css'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout