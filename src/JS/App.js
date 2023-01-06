import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Panier from './Panier';
import Inscription from './Inscription';
import Connexion from './Connexion';
import MentionLegal from './MentionLegal';
import AdminUser from './AdminUser';
import Accueil from './Accueil';


function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path='/Accueil' element={<Accueil/>}></Route>
        <Route path='/Inscription' element={<Inscription/>}></Route>
        <Route path='/Connexion' element={<Connexion/>}></Route>
        <Route path="/Panier" element={<Panier/>}></Route>
        <Route path="/produit" element={<Produit/>} ></Route>
        <Route path='/Admin/users' element={<AdminUser/>}></Route>
        <Route path='/MentionLegal' element={<MentionLegal/>}></Route> 
      </Routes>
      <Footer />

    </div>
  );
}
export default App;
