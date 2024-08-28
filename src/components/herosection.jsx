import React from "react";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";
import { Button } from "../styles/button";
import {useGlobalContext } from "../context";

const Herosection = ()=> {
  const  {name , image } = useGlobalContext();
    return <Wrapper>
   <div className="container grid grid-two-coloumn">
    <div className="section-hero-data">
      <p className="hero-top-data">THIS IS ME </p>
      <h1 className="hero-heading">{name}</h1>
      <p className="hero-para">
          i am a {name}.a Full stack Developer, youtubh and freelamcer.
           a full stack developer, youtuber and freelancer.
      </p>
      <NavLink to = "/contact" >
      <Button className ="btn">hire me</Button>
    </NavLink>
    </div>
   
        <div className="section-hero-image">
    <picture>
      <img src={image} alt="hero image" className="hero-image"/>  
    </picture>

        </div>
   </div>
    </Wrapper>
};
const Wrapper = Styled.section`
padding : 12rem 0;
background-color: rgb(220, 220, 175);

 .hero-heading { 
 text-transform :uppercase;
 font-size : 6.4rem;
}
 .hero-top-data{
   text-transform: uppercase;
   font-weight : 500;
   font-size : 1.5rem;
   color : rgb(15, 87, 132);
 }
   .btn{
      margin-top: 4rem;
      font-size : 1.8rem;
   
    &:hover{
    background-color : white;
    border: 1px solid   rgb(48, 48, 190);
    color:  blue ;
    transform : scale(0.9);
    cursor: pointer;
      }
    }
    picture {
     text-align : center;
    }
     .section-hero-image{
      display : flex;
      justify-content : center;
      align-item: center;
     }
      hero-para{
       margin-top : 1.5rem;
       margin-bottom : 3.4rem;
       max-width : 60rem;
      }
       .section-hero-data{
        display :flex;
        flex-direction : column;
        justify-content : center ;
        //  text-align: center;
       }

 .container{
 max-width : 120rem;
 margin : 0 auto ;
 }
    .grid{
     display : flex;
     gap : 9rem;
    }
     grid-two-column{
      grid-template-columns : repeat(2,1fr);
     }
     grid-three-column{
      grid-template-columns : repeat(3,1fr);
     }
 .hero-image{
  max-width : 90%;
  border-radius: 10%;

  &:hover{
    transform : scale(1.05);
    cursor: pointer;
    border: 1px solid rgb(165, 165, 111);
   
  }
   
 }
        
`;
export default Herosection;