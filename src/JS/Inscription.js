import '../CSS/Inscription.css';
import { useState } from "react";
import axios from 'axios';

function Inscription() {
    const [nom, setNom]= useState("");
    const [mail, setMail]= useState("");
    const [adresse, setAdresse]= useState("");
    const [mdp, setMdp]= useState("");
    const [message, setMessage]= useState(null)

    const ajoutUtilisateur = async(e)=>{
        e.preventDefault()
        await axios.post(`http://localhost:8000/Utilisateur`, {
            nom: nom,
            mail: mail,
            adresse: adresse,
            mdp: mdp
          })
        .then(res => {
            console.log(res)
            if(res.status == 200){
                setMessage(res.data.message)
            }
            else{
                alert("erreur")
            }
            
          })
    }

    return (
        <div className="margintop">
        <h2 className="mb-3">Formulaire d'Inscription</h2>
         
        <form onSubmit={ajoutUtilisateur}>
            <input type="text" name="nom" placeholder="Nom" onChange={(e)=> setNom(e.target.value)}/> <br/>
            <input type="text" name="mail" placeholder="Mail" onChange={(e)=> setMail(e.target.value)}/> <br/>
            <input type="text" name="adresse" placeholder="Adresse" onChange={(e)=> setAdresse(e.target.value)}/> <br/>
            <input type="text" name="mdp" placeholder="Mot de passe" onChange={(e)=> setMdp(e.target.value)}/> <br/>
            <input type="text" name="mdp" placeholder="Confirmez votre mot de passe" onChange={(e)=> setMdp(e.target.value)}/> <br/>
            <input type="submit" value="Inscription"/> <br/>
        </form> <br/>
            {message != null ? <p className='info'> {message} </p> : <></>}
        </div>
    );
  }

export default Inscription;
