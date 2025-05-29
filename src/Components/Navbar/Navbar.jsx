import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';



export default function Navbar() {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <a href="/" style={{ textDecoration: 'none' }}>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
        </a>
      </div>
      <ul className='nav-menu'>
      <li onClick={() => setMenu("shop")}>
  <Link to='/'> Shop</Link>
  {menu === "shop" && <hr className="nav-menu-hr" />}
</li>

        <li onClick={() => setMenu("men")}>
          <Link to='/men'>Men</Link>
          {menu === "men" && <hr className="nav-menu-hr" />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to='/womens'>Women</Link>
          {menu === "women" && <hr className="nav-menu-hr" />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr className="nav-menu-hr" />}
        </li>
      </ul>

      <div className="nav-login-cart">
<Link to="/register"> <button type="button">Register</button></Link>
<Link to="/logout"> <button type="button">LogOut</button></Link>


      
<Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>

        <div className='nav-cart-count'>{getTotalCartItems ()}</div>
      </div>
    </div>
  );
}
