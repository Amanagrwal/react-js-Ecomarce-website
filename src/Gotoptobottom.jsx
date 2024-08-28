import React, { useEffect, useState } from 'react'
import Styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";
function Gotoptobottom() {
  const [isVisible , setIsVisible]= useState(false);
    const gotobtn = ()=>{
  window.scrollTo({top:0 , left:0 , behavior:"smooth"});
    };
  const listenToscroll = ()=>{

   let heightTohidden = 500;
   const winscroll =  document.body.scrollTop || document.documentElement.scrollTop;
   
   if(winscroll > heightTohidden){
     setIsVisible(true);
   }
   else{
    setIsVisible(false);
   }
    };

 useEffect(()=>{
    window.addEventListener('scroll',listenToscroll);
    return()=> window.removeEventListener("scroll",listenToscroll)
 })
  return (
    <Wrapper>
      { isVisible &&(
    <div className='top-btn' onClick={gotobtn}>
       <FaArrowUp  className='top-btn--icon'/>
    </div>
      )}
    </Wrapper>
  )

}


const Wrapper = Styled.section`

display : flex;
justify-content : center;
align-items :center;

.top-btn{
        font-size: 2.4rem;
        width: 6rem;
        height: 6rem;
        color: #fff;
        background: blue;
        box-shadow: red;
        border-radius: 50%;
        position: fixed;
        bottom : 5rem;
        right: 5rem;
        z-index:999;
        display: flex;
        justify-content: center;
        align-items: center;

        &--icon{
          animation: gototop 1.2s linear infinite alternate-reverse;
        }
@keyframes gototop {
   0%{
    transform : translative(-0.5rem);
   }
   100%{
    transform : translativeY(1rem);
   }
}
   }

`;
export default Gotoptobottom
