import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-gray-900 py-5 flex justify-center navbar' >
     <Link to='/futbol-quiz'>
        <h1 style={{fontSize: '25px'}} className='text-white text-2x1 font-bold hover:scale-110 transition-all duration-500'>Futbol Quiz</h1>
     </Link>
    </header>
  )
}

export default Navbar