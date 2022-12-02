import '../CSS/Banner.css';
import { Link } from "react-router-dom";

function Banner() {

  return (
    <div>
      <nav id='menu' class="menuBack menuScroll">
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
        <ul>
          <Link to="/">
            <li> <div className='creativeName'> M2L</div></li>
          </Link>

          <Link to="/Produit">
            <li>Produit</li>
          </Link>

              {/* <li><a class='dropdown-arrow' href=''>Projets</a>
              <ul class='sub-menus'>
                  <li><a href=''></a></li>
                  <li><a href=''></a></li>
              </ul>
              </li> */}
        </ul>

      </nav>
    </div>
  );
}

// function updatemenu() {
//   if (document.getElementById('responsive-menu').checked == true) {
//     document.getElementById('menu').style.borderBottomRightRadius = '0';
//     document.getElementById('menu').style.borderBottomLeftRadius = '0';
//   }else{
//     document.getElementById('menu').style.borderRadius = '10px';
//   }
// }

  export default Banner;