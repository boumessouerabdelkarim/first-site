import React from "react";
import '../styles/revetement.css';
import Carte from "../components/Carte";
 import {Data} from '../datas/Revetement'
const Revetements_sol = () => {
  return (
    <div className="revetement">
      <div className="presentation_revetements">
        <div className="gal_revetements">
        <img
          
          src="/beton.jfif"
          alt="First slide"
        />
        </div>
        <div className="description_revetements">
        <h2 className="title">REVETEMENTS SOL</h2>
          <p>
            Le revêtement de sol professionnel ou revêtement de sol à usage
            professionnel se présente sous différentes formes en fonction des
            envies et besoins des entreprises. Il sert de protection mais aussi
            de décoration. Il doit en outre être adapté pour résister aux
            passages de personnes et/ou de marchandises (par exemple lors
            d’unaménagement de commerce ou dans desespaces tertiaires). Parmi
            les matériaux de revêtement de sol possibles, on peut trouver :
          </p>
          <ul>
            <li>La moquette</li>
            <li>Le sol en béton poli</li>
            <li>Le sol en béton ciré</li>
            <li>Le sol en résine époxy</li>
          </ul>
          <p>
            En fonction des lieux (salle, pièce, bureau, salle de réunion, hall
            d’entrée) et des contraintes d’activité, le choix du revêtement de
            sol se fera selon différents critères comme la durabilité, la
            résistance, l’entretien, le confort acoustique, le confort
            thermique, l’aspect esthétique, la sécurité. Le choix du revêtement
            de sol professionnel doit avant tout être réfléchi et répondre aux
            besoins de la société. Pour vous guider dans ce choix, les experts
            en agencement et aménagement de bureaux sont là et sauront vous
            éclairer sur les meilleurs choix du marché et feront appel à des
            partenaires de confiance.
          </p>
          <p>
            Lors d’une première visite, nous vous établirons un devis, qui
            découlera ensuite sur un conseil et un suivi jusqu’à la livraison de
            votre projet.
          </p>
        </div>
      </div>
      <h2 className="title">GAMME PRODUITS</h2>
      <div className="gamme_products">
      {Data?.map((el)=>(
              <Carte key={el.id} title = {el.title}
                        imgUrl={el.imgUrl} 
                        description = {el.description}
                        
                />
          ))} 
      </div>
    </div>
  );
};

export default Revetements_sol;
