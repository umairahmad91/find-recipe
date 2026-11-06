import React from 'react'
import { Link } from 'react-router'
function Navbar() {
  return (
   <header>
    <nav className='nav'>
      <Link to="/" className='recipe'>RecipeFinder</Link>
      <Link to="/"  className='home'>Home</Link>
    </nav>
   </header>
  )
}

export default Navbar
