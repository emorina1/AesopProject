import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef(); 

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navLinks.forEach(link => {
            link.classList.add('scrolled-link');
        });
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => {
            link.classList.remove('scrolled-link');
        });
    }
  });

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="Menu" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("hand") }}>
          <Link style={{ textDecoration: 'none' }} to='/hand'>SkinCare</Link>
          {menu === "hand" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("skincare") }}>
          <Link style={{ textDecoration: 'none' }} to='/skincare'>Hand&Body</Link>
          {menu === "skincare" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("wash") }}>
          <Link style={{ textDecoration: 'none' }} to='/wash'>Wash</Link>
          {menu === "wash" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("about") }}>
          <Link style={{ textDecoration: 'none' }} to='/about'>AboutUs</Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <div className="cart-icon-container">
          <Link to='/cart'>
            <img className='cart-icon' src={cart_icon} alt="Cart" />
            {getTotalCartItems() > 0 && (
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            )}
          </Link>
        </div>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
