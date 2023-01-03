import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Presentation from './Presentation';
import Contact from './Contact';
import Panier from './Panier';
import Inscription from './Inscription';
import AdminUser from './AdminUser';


function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path='/' element={<Inscription/>}></Route>
        <Route path='/Inscription' element={<Inscription/>}></Route>
        <Route path="/Panier" element={<Panier/>}></Route>
        <Route path='/Presentation' element={<Presentation/>}></Route>
        <Route path="/produit" element={<Produit/>} ></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Admin/users' element={<AdminUser/>}></Route> 
      </Routes>
      <Footer />

    </div>
  );
}
export default App;
