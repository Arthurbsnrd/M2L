import '../CSS/App.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Banner />
      <Footer />
      <Contact />
    </div>
  );
  return (
    <Route path='Contact' element={<Contact/>}>
        </Route>
  )
}


export default App;
