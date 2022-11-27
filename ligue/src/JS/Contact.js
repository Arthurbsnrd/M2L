import '../CSS/Contact.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Contact(props){
    let theme= props.mode
      return<div className={`Contact ${theme}`}>
          <div className='Titre-contact'>
              <h1>Nous contacter:</h1>
          </div>
          <div className='Element-contact'>
              <span className='Element-contact1'> <img alt='' height={'50px'}></img><h3>06.07.08.09.10</h3></span>
              <span className='Element-contact2'> <img alt='' src='https://img.icons8.com/color/12x/apple-mail.png' height={'50px'}></img><h3>m2l-pro@gmail.com</h3></span>
          </div>
          <div className='iframe'>
              <iframe className="myFrame" title="myFrame"   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694684!2d2.276995235800789!3d48.858833639301146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1669548701639!5m2!1sfr!2sfr"> 
              </iframe>
          </div>
      </div>
  }
  


export default Contact;