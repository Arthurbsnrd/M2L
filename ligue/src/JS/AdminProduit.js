import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from "react";
import '../CSS/Commun.css';

function AdminProduit() {
    const [produits, setProduit]=useState()
    const [chargement, setChargement] =useState(true);

    const recup = async(req, res) =>{
        let resultat = await axios.get('http://localhost:8000/produit')
        console.log(resultat.data)
        setProduit(resultat.data)
        setChargement(false)
    }
    useEffect(()=>{
        recup()
    },[])

    if(!chargement){
        return (
            <Table striped bordered hover size="sm" className='fontFamily margintop'>
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
                {produits.map(produit =>(
                    <tr>
                      <td>{produit.id}</td>
                      <td>{produit.titre}</td>
                      <td>{produit.admin}</td>
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
        <div className='marginBottom margintop'>
            Chargement...
        </div>)
    }
  
  }

export default AdminUser;