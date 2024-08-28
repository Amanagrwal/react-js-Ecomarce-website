import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import { Button } from '../styles/button';
import { FaDiscord , FaInstagram ,FaYoutube  } from "react-icons/fa";
const Footer = ()=>{
  return (
   <Wrapper>
   <section className="contact-short">
      <div className='grid grid-two-column'>
         <div className='text'>
          <h3> Ready to get started</h3>
           <h3>Talk to us today</h3>
        </div>

        <div>
        <NavLink to="/">
           <Button className='btn'>Get Started</Button>
        </NavLink>
         </div>
      </div>
   </section>
 
 <footer>
    <div className='container grid grid-four-column'>
      <div className='footer-about'>
        <h3>Aman mangal</h3>
        <p>Lorem ipsum dolar.sit amet consectetur adipisicing elit.</p>
       </div>

      <div className='footer-subscribe'>
        <h3>subscribe to get important updates</h3>
      <form action="#">
        <input type="email" required autoComplete='off'placeholder='Email' />
       <input type="submit" value="subcribe"/>
      </form>
       </div>

      <div className='footer-social'>
        <h3 className='follow'>Follows Us</h3>
         <div className="social-icon">
          <div>
          <FaDiscord className='icons'/> 
          </div>
          <div>
            <a href="https://www.instagram.com/aman___agrwal/">
          < FaInstagram className='icons'/> 
          </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCPdN0PA9WGrezyDYvCa1UXA" target='_blank'>
          <FaYoutube  className='icons'/> 
          </a>
          </div>
         </div>
       </div>
      <div className='footer-contact'>
        <h3>Call us </h3>
        <h3>9799512320</h3>
       </div>
       </div>

       <div className='footer-bottom--section'>
       <hr></hr>
     <div className='container grid grid-two-column'> 
          <p>@{new Date().getFullYear()} Aman agrwal.All Right Reserved</p>
      <div>
            <p>PRIVACY POLICY</p>
            <p>TERM & CONDITIONS</p>
          </div>
         </div>
       </div>
 </footer>



   </Wrapper>
  )
}
const Wrapper = Styled.section`
 .btn{
      margin-top: 4rem;
      font-size : 1.8rem;
   
    &:hover{
    background-color : white;
    border: 1px solid   rgb(48, 48, 190);;
    color:   rgb(48, 48, 190);
    transform : scale(0.9);
      }
    }
      footer{
       padding: 14rem 0 9rem 0;
      background-color : rgb(8, 8, 49);
     h3{
        color : white;
        margin-bottom : 2rem;
     }
        p{
        color : white;
        }
        .footer-social{
          display : flex;
          gap : 3rem;

          div{
            padding : 1rem;
            border-radius: 50%;
            // border :  2px solid white;
            display : flex;
            text-align : center;
            

            .icons{
               color: white;
               font-size : 3rem;
               position:relative;
               cursor : pointer;
                transition : all 0.2s;
                text-align : center;

        &:hover{
        background-color : white;
         border: 2px solid   rgb(48, 48, 190);;
        color:   rgb(48, 48, 190);
        transform : scale(0.9);
               }
            }
          }
          }
           .footer-bottom--section{
           padding-top : 6rem;
    
           hr{
             margin-bottom : 2rem;
             color: white;
             height : 0.1px;
           }


        }
      }
        .contact-short{
        max-width: 110rem;
        margin: auto;
        margin-top: 6rem;
        padding: 1rem 4rem;
        height: 12rem;
        background-color: rgba(210, 204, 204, 0.999);
        border-radius: 1rem;
        box-shadow: rgb(202, 180, 180);
        transform: translateY(50%); 
        align-items: center;
       }

       .grid div:last-child{
        justify-self: end;
        align-self: center;
        text-align: end;
       }
       .text{
        font-size: 1.8rem;
        margin-top: 4rem;
       }
        h3{
         font-size : 2rem;
        }
         .follow{
            font-size : 2rem;
            margin-left: 2.5rem;
           text-align : center;
           display : flex;
           align-item : center;
         }
    
`; 
export default Footer;