import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import { CgMenu } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <div className="menuicon">
        <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className="navbar-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" className="navbar-link">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">Contact</NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoCloseCircle className="mobile-nav-icon" />
          ) : (
            <CgMenu className="mobile-nav-icon" />
          )}
        </div>
      </div>
    </Nav>
  );
};

const Nav = Styled.nav`
  .navbar-list {
    display: flex;
    text-align: center;
    align-items: center;
    list-style: none;
    gap: 4.8rem;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.2rem;
        text-transform: uppercase;
        transition: color 0.3s linear;
      }
      &:hover,
      &.active {
        color: rgb(128, 0, 0);
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    cursor: pointer;
  }

  .mobile-nav-icon {
    font-size: 2rem;
  }

  @media (max-width: 736px) {
    .navbar-list {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px; /* adjust based on your navbar height */
      left: 0;
      width: 100%;
      background-color: white;
      padding: 1rem 0;

      &.open {
        display: flex;
      }

      .navbar-link {
        padding: 1rem;
        font-size: 1.2rem;
      }
    }

    .mobile-navbar-btn {
      display: block;
    }
  }
`;

export default Navbar;
