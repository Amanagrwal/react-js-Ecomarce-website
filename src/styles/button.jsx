import styled from "styled-components";
export const Button = styled.button`
 text-decoreation : none;
 background-color: rgb(118, 118, 176);
  color: black;
 text-align : center;
 cursor : pointer;
 text-transform: uppercase;
 border:none;
 border : 50%;
 padding : 1.4rem 2.4rem;
 transition : all 0.3s ease 0s;
-webkit-transition :all 0.3 ease 0s;
-moz-transition : all 0.3 ease 0s;
-o transition : all 0.3s ease 0s;
font-size : 1.1rem;

 &:hover,
 &active{
  box-shadow : 0 2rem 2rem 0 rgb(132 144 255 / 30%); 
  box-shadow : black
  transform : scale(0.96);
  }

  a{
   text-decorection : none;
   font-size : 1.8rem;
   color :rgb(255 255 255);
  }
` 