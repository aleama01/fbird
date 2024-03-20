import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex flex-row items-center justify-end mx-10 py-2 space-x-2 text-xl border-b'>
      <Link to='/' className='hover:underline'> Home </Link>
      <Link to='/yourBirds' className='hover:underline'> Birds </Link>
      <img src='logo.jpg' alt='logo' className='h-[40px]' />
    </nav>
  )
}

export default Header