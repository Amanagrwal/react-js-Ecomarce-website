import Styled  from "styled-components";
import React from "react";
  export  const Globalstyle =  Styled.body`
* {
 margin : 0;
 padding : 0;
 box-sizing : border-box;

}
 html{
 font-size  : 62.5%;
 overflow-x : hidden;
 }

 h1{
    font-size : 6rem;
    font-weight : 900;
    color : red;
 }
    h2{
     color : blue;
     font-size : 4.4rem;
     font-weight: 300;
     white-space : normal;
     text-align : center;
    }
     h3{
      font-size : 1.8rem;
      font-weight: 400;
     }


     p{
      color : yallow;
      opacity : .7;
      font-size : 1.65rem;
      line-height : 1.5rem ;
      font-weight: 400;
     }
      li {
       list-style : none;
      }
`;

