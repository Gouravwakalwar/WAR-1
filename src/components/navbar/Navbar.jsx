import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
    <> 
    <p><a href="#home">Home</a></p>
                <p><a href="#wwar1">What is WAR-1?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Libarary</a></p>
                 </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="war1__navbar">
      <div className="war1__navbar-links">
        <div className="war1__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="war1__navbar-links_container">
         <Menu/>
        </div>
      </div>
      <div className="war1__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="war1__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="war1__navbar-menu_container scale-up-center">
          <div className="war1__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="war1__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;