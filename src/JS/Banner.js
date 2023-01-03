import '../CSS/Banner.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner() {

  return (
    <div>
      <nav className="computerDisplay menu">
        <ul>
          <Link to="/">
            <li className='creativeName'> M2L</li>
          </Link>

          <Link to="/Produit">
            <li>Produit</li>
          </Link>

          <div className='d-flex justify-content-end align-items-center endNav'>
          <Link to="/Panier">
              <li>Panier</li>
            </Link>
            <Link to="/Inscription">
              <li>Inscription</li>
            </Link>
          </div>
        </ul>

      </nav>

    </div>
  );
}

  export default Banner;