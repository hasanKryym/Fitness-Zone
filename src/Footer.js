import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <nav>
            {/* <ul className='nav-list'>
                <li><a href='#'><i className="fa-solid fa-dumbbell"></i></a></li>
                <li><a href='#'><i className="fa-solid fa-pen-to-square"></i></a></li>
                <li><a href='#'><i className="fa-brands fa-nutritionix"></i></a></li>
                <li><a href='#'><i className="fa-solid fa-newspaper"></i></a></li>
            </ul> */}

            <ul className='nav-list'>
                <li>
                  <Link to='exercises'><i className="fa-solid fa-dumbbell"></i></Link>
                </li>

                <li>
                  <Link to='myplan'><i className="fa-solid fa-pen-to-square"></i></Link>
                </li>

                <li>
                  <Link to='nutrition'><i className="fa-brands fa-nutritionix"></i></Link>
                </li>

                <li>
                  <Link to='nutrition'><i className="fa-solid fa-newspaper"></i></Link>
                </li>
  
            </ul>
      </nav>
    </footer>
  )
}

export default Footer