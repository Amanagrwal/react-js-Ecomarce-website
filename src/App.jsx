import React from 'react'
import Home from "./Home";
import About from "./about";
import Services from "./services";
import Contact  from "./contact";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from './Error';
import Gotoptobottom from './Gotoptobottom';
import { Globalstyle } from './Globelstyle';



const App = ()=>{

  return ( 
    
<BrowserRouter>
<Header />

  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />}/>
   <Route path="/services" element={<Services />} />
   <Route path="/Contact" element={<Contact />} />
   <Route path="*" element={<Error />}/>
  </Routes>
    <Gotoptobottom/>
  <Footer/>
</BrowserRouter>

  );
}
export default App;