import '../CSS/Footer.css';
import '../CSS/Commun.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
      <div>
        <div className='footer fontFamily'>
          <Link to="/MentionLegal">
            <li>Mention Légal</li>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Footer;