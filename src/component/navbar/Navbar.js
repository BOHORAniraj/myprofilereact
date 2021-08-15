import React from "react";
// import {Nav} from 'react-bootstrap'
import {Nav, Container, Col, Row} from 'react-bootstrap'
import "./Navbar.css";

export const TopNavBar = () => {
  return(
    <section className="nv" id="main">
        <nav>
        <a href="#" class="logo">NIRAJ</a>        
        <ul>
            <li><a href="#">SKILL</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
        
        </ul> 
        </nav>


    </section>
    
  )
}


 
