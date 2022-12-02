import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Produit from './Produit';
import Presentation from './Presentation'


function App() {
  return (
    <div>
      <Banner />
      <Routes>
        {/* <Route path="/" element={<Accueil />}></Route> */}
        <Route path='/Presentation' element={<Presentation/>}></Route>
        <Route path="/produit" element={<Produit/>} ></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <Footer />

  </div>
);
  }
export default App;
