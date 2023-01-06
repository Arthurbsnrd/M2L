import '../CSS/Panier.css';
import '../CSS/Commun.css';

function Panier() {
return (
    <div className='margintop marginBottom'>
        <h1>VOTRE COMMANDE</h1>
        <div className='cardProduit d-flex justify-content-center'>
            <p>Nom du produit</p>
            <div className='contenuCard d-flex flex-row'>
                <p className='testPlace'>image ici</p>
                <p>text truc</p>
            </div>
                
        </div>
    </div>
);
}



export default Panier;