import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes.js'

function Header() {
  return (
    <nav>
      <div className="logo">Coffeeshop</div>
      <Routes >
      <ul>
        <Link to='/Home'><li>Home</li></Link>
        <Link to='/Produtos'><li>Produtos</li></Link>
        <Link to='/Blog'><li>Blog</li></Link>
        <Link to='/Contact'><li>Contato</li></Link>
      </ul>
      </Routes>
      <div className="search">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  )
}

export default Header();

//teste