import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/'
import Styled  from 'styled-components';

const Header = ()=>{
  return (
    <Mainheader className='header'>
        <NavLink to="/">
           <img src ='./images/shopin.webp'alt="logo"className='logo' />
        </NavLink>
        <Navbar/>
    </Mainheader>
  )
};
const Mainheader = Styled.header`
     display: flex;
      height: 8rem;
      justify-content: space-between;
      align-items: center;
      padding: 0 4.8rem;
      background-color: rgb(252, 244, 244);
       margin-bottom: 5rem;
      
  .logo{
    height: 7rem;
  }
`
export default Header;