import '../CSS/Footer.css';
import '../CSS/Commun.css';

import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
      <div>
        <div className='footer fontFamily'>
          <li>Mention Legal</li>

          {/* <Link to="/Contact">
            <li>Contact</li>
          </Link> */}
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Footer;