import React from "react";
import '../styles/exterieur.css';
import {Data_exterieur} from "../datas/Data_exter"
import Carte from "../components/Carte"
const Peinture_exterieur = () => {
  return (
    <div className="exterieur">
      <div className="presentation_exterieur">
        <div className="gal_exterieur">
        <img
          
          src="/extern.png"
          alt="First slide"
        />
        </div>
        <div className="description_exterieur">
        <h2 className="title">PEINTURE EXTERIEUR</h2>
          <p>
            Donnez un air de neuf à vos murs grâce aux diverses techniques de
            Decolux spécialisée en travaux de peintures extérieures.
          </p>
          <p>
            Chacune de nos techniques est adaptée à la fois à vos attentes et à
            l'état actuel de votre façade. Nous disposons d’une large gamme de
            produits spécifiques pour la rénovation de peinture extérieure. La
            peinture extérieure permet à votre maison d’être protégée des
            intempéries tout en mettant en valeur le côté esthétique.
          </p>
          <p>
            Grâce à des produits et des techniques adaptées à la rénovation de
            façade, une méthode minutieuse et professionnelle, des compétences
            associées, nous mettons en œuvre un traitement spécifique en
            fonction de la nature de votre revêtement et réaliserons un résultat
            à la hauteur de vos attentes.
          </p>
          <p>
            Lors d’une première visite, nous vous établirons un devis, qui
            découlera ensuite sur un conseil et un suivi jusqu’à la livraison de
            votre projet.
          </p>
        </div>
      </div>
      <h2 className="title">GAMME PRODUITS</h2>
      <div className="gamme_product">
      {Data_exterieur?.map((el)=>(
              <Carte key={el.id} title = {el.title}
                        imgUrl={el.imgUrl} 
                        description = {el.description}
                        
                />
          ))} 
      </div>
    </div>
  );
};

export default Peinture_exterieur;
