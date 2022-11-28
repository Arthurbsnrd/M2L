import '../CSS/App.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Banner />
    <Routes>
      <Route path='/Contact' element={<Contact/>}>
      </Route>


    </Routes>
      <Footer />

  </div>
);
  }
export default App;
