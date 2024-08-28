import React ,{ useEffect } from 'react'
import Herosection from './components/herosection';
import { useGlobalContext } from './context';
const About = ()=>{
  // const data = {
  //   name : "aman agrwal",
  //   image :"./images/apple-iphone-13-pro.jpg",
  // };

  const { updateAboutPage} =  useGlobalContext();

  useEffect(()=>{
    updateAboutPage();
  },[]);
  return (
   <Herosection />
  )
}
export default About;