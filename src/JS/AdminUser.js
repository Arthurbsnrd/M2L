import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from "react";
import '../CSS/Produits.css';

function AdminUser() {
    const [utilisateurs, setUtilisateurs]=useState()
    const [chargement, setChargement] =useState(true);

    const recup = async(req, res) =>{
        let resultat = await axios.get('http://localhost:8000/utilisateur')
        console.log(resultat.data)
        setUtilisateurs(resultat.data)
        setChargement(false)
    }
    useEffect(()=>{
        recup()
    },[])

    if(!chargement){
        return (
            <Table striped bordered hover size="sm" className='margintop'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nom</th>
                  <th>Adresse</th>
                  <th>Mail</th>
                  <th>Admin</th>
        
                </tr>
              </thead>
              <tbody>
                {utilisateurs.map(utilisateur =>(
                    <tr>
                      <td>{utilisateur.id}</td>
                      <td>{utilisateur.nom}</td>
                      <td>{utilisateur.adresse}</td>
                      <td>{utilisateur.mail}</td>
                      <td>{utilisateur.admin}</td>
                      <td><button>Modifier</button></td>
                      <td><button>Supprimer</button></td>
                    </tr>
                ))}
              </tbody>
            </Table>
          );
    }
    else{
        return(
        <div className='margintop'>
            Chargement...
        </div>)
    }
  
  }

export default AdminUser;