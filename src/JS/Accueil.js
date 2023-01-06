import React from 'react';
import '../CSS/Accueil.css';
import Carousel from 'react-bootstrap/Carousel';
import basket from '../IMG/1.jpg';
import basket2 from '../IMG/2.png';



function Accueil() {
    return (
        <div>      
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={basket} 
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
             <img
              className="d-block2"
              src={basket2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
             <img
              className="d-block"
              src={basket}
              alt="Third slide"
            /> 
          </Carousel.Item>
        </Carousel>
        <br></br>
        <h1 className='colorTitle'>Maison des Ligues de Lorraine</h1> <br></br>
                <p>
                Une maison au service du sport En décidant en 2000 de l’acquisition et la réhabilitation de la Maison Régionale des Sports de Lorraine 
                à Tomblaine, la région Lorraine a voulu répondre à des besoins de structuration du mouvement sportif lorrain, qui représente aujourd’hui
                6 500 clubs, plus de 525 000 licenciés et près de 50 000 bénévoles. <br></br>
                Véritable lieu de vie, cette Maison propose aux Ligues et Comités, 
                des locaux fonctionnels situés à l’est de Nancy, permettant ainsi aux dirigeants, aux bénévoles et aux salariés d’échanger, de partager,
                de se former et de se regrouper dans des conditions optimales. <br></br><br></br>
                Ce sont ici plus de 3 550 clubs lorrains, toutes disciplines confondues, qui bénéficient de cet outil. <br></br>
                Un tel établissement est à la fois un facteur fort de cohésion et de qualité du sport régional. <br></br>
                Il a pour vocation d’héberger les structures sportives régionales, de leur fournir des services administratifs, comptables et juridiques. <br></br>
                Entièrement financée par la région Lorraine, la Maison Régionale des Sports de Lorraine est gérée en partenariat par la région Lorraine et le Comité Régional Olympique et Sportif de Lorraine 
                (CROSL) qui est l’initiateur d’une politique sportive régionale unitaire. <br></br><br></br>
                En décidant en 2000 de l’acquisition et la réhabilitation de la Maison Régionale des Sports de Lorraine à TOMBLAINE, 
                la Région Lorraine a voulu répondre à des besoins de structuration du mouvement sportif lorrain, qui représente aujourd’hui 6 500 clubs, 
                plus de 525 000 licenciés et près de 50 000 bénévoles. <br></br>
                Véritable lieu de vie, cette Maison propose aux Ligues et Comités, des locaux 
                fonctionnels situés à l’Est de Nancy, permettant ainsi aux dirigeants, aux bénévoles et aux salariés d’échanger, de partager, 
                de se former et de se regrouper dans des conditions optimales. Ce sont ici plus de 3 550 clubs lorrains, toutes disciplines confondues, 
                qui bénéficient de cet outil.
                <br></br><br></br><br></br><br></br><br></br><br></br>
                </p>
        </div>
        
      );

    }



export default Accueil;