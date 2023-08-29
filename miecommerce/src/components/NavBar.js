import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import CartWidget from './CartWidget'


const NavBar = () => {
  const categories = [
    'Electrónica',
    'Ropa',
    'Hogar',
    'Deportes'
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand" >Brand</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link" >Inicio</Link>
          </li>
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={`/categoria/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
        <CartWidget itemCount={3} />
      </div>
    </nav>
  )
}

export default NavBar