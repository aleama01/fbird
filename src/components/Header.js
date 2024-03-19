import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-[80vw] mx-auto flex flex-row justify-between'>
      <Link to='/yourBirds'> YourBirds </Link>
      <Link to='/'> Home </Link>
    </div>
  )
}

export default Header