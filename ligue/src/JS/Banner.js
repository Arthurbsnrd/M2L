import '../CSS/Banner.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import menuIcon from "../IMG/menuWhite.png";


var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

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

          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>

      </nav>

<div id="mySidenav" class="sidenav">
  <a id="closeBtn" href="#" class="close">&times;</a>
  <ul>
    <li><a href="#">A propos</a></li>
    <li><a href="#">Nos services</a></li>
    <li><a href="#">Témoignages</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>

<a href="#" id="openBtn">
  <span class="burger-icon">
    <span></span>
    <span></span>
    <span></span>
  </span>
</a>

      <div className='mobileDisplay'>
        <div className='menu'>
        <img className='iconStyle' src={menuIcon} alt="" srcset=""/>
          <nav >
            <ul>
              {/* <Link to="/">
                <li className='creativeName'> M2L</li>
              </Link>

              <Link to="/Produit">
                <li>Produit</li>
              </Link>

              <Link to="/Contact">
                <li>Contact</li>
              </Link> */}
            </ul>
          </nav>
        </div>
      </div>



    </div>
  );
}

  export default Banner;