import React from "react";
// conponents 
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Contact from "./conponents/Contact";
import Services from "./conponents/Services";
import Footer from "./conponents/Footer";
// style 
import "./styles/App.css"
import "./styles/Home.css"
import "./styles/Contact.css"
import "./styles/Footer.css"
import "./styles/mediaquery.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
