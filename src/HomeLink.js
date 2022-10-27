import React from 'react'
import { Link } from 'react-router-dom'
const HomeLink = () => {
  return (
    <div className='home-link'>
        <Link to='/'><i className="fa-solid fa-house"></i></Link>
    </div>
  )
}

export default HomeLink