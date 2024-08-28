import React, { useEffect } from 'react'
import Herosection from './components/herosection';
import {useGlobalContext } from './context';
import Services from './services';
import Contact  from "./contact";


const Home = ()=>{
  const {updateHomepage} =useGlobalContext();
  useEffect(()=>{
    updateHomepage();
  },[]);
  return (
       <>
       <Herosection/>
       <Services />
       <Contact  />

       </>
    
  )
}

export default Home;