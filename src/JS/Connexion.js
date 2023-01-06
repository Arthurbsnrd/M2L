import { useState } from "react";
import axios from 'axios';
import '../CSS/Commun.css';
import '../CSS/Connexion.css';

function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Envoi d'une requête HTTP à l'API NodeJS pour la connexion
          const response = await axios.post('/login', { username: username, password: password });
    
          // Stockage du jeton de connexion de manière sécurisée
          localStorage.setItem('token', response.data.token);
        } catch (error) {
          console.error(error);
        } 
      }


    return (
        <div className='margintop marginBottom'>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}/>
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Connexion;