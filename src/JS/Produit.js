import '../CSS/Produits.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import maillot1 from '../IMG/maillot1.jpg';
import maillot2 from '../IMG/maillot2.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Produit() {
  const [produits, setProduits] = useState();
  const [chargement, setChargement] =useState(true);
  const Produits = async()=>{
    await axios.get(`http://localhost:8000/Produits`)
    .then(res => {
        console.log(res.data)
        setProduits(res.data)
        setChargement(false)

      })
    }
    useEffect(()=>{
      Produits()

    },[])
  if(!chargement){
    return (
      <div className='margintop'>
        {produits.map(produit=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../IMG/" + produit.photo)} />
        <Card.Body>
          <Card.Title>{produit.nom}</Card.Title>
          <Card.Text>
            {produit.description}
          </Card.Text>
          <Button variant="primary">Ajouter au panier</Button>
        </Card.Body>
      </Card>
          ))}
      
      </div>
      
    );
  }
  else{
    return(
      <div className='margintop'>
        Chargement...
      </div>
    )
  }
  
}



  export default Produit;