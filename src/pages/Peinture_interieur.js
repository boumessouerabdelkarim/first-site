import React, { useState } from "react";
import "../styles/interieur.css"
import  Carte from "../components/Carte"
import {Data_deco} from "../datas/Data_deco"
const Peinture_interieur = () => {
 const [text, setText] = useState("all")
 
  return (
    <div className='interieur'>
      <div className='presentation_interieur'>
        <div className='gal_interieur'>
        <img
          
          src="/inter1.png"
          alt="First slide"
        />
        </div>
        <div className='description_inter'>
        <h2 className="title">PEINTURE INTERIEUR</h2>
<p>
Vous avez besoin d'une entreprise pour la création ou la rénovation de vos peintures intérieures et décoratives dans la Meuse ?
Les équipes de Decolux à votre écoute.
Ensemble nous définissons vos besoins et vos souhaits pour la rénovation de la peinture de votre local professionnel, commercial, appartement ou maison.
Nous vous conseillons dans le choix d'une technique de peinture, d'une teinte de peinture et vous aidons à coordonner et harmoniser votre intérieur, afin de réaliser au mieux vos projets.
</p>
<ul>
  <li>Vaste choix de couleur</li>
  <li>Peintures traditionnelle : Enduits, Impressions et Primaires, Peinture de finition</li>
  <li>Peinture à la chaux</li>
  <li>Peinture à effet decorative</li>
</ul>
<p>
Lors d’une première visite, nous vous établirons un devis, qui découlera ensuite sur un conseil et un suivi jusqu’à la livraison de votre projet.
</p>
        </div>
      </div>
      <div className="produits">
      <h2 className="title">GAMME PRODUITS</h2>
      <div className="filtre">
      <button type="button" className='myButton'onClick={()=>setText("all")}>
	Tous
</button>
<button type="button" className='myButton' onClick={()=>setText("sablee")}>
	Effet Sable
</button>
<button type="button" className='myButton'onClick={()=>setText("marbre")}>
Effet Marbre
</button>
<button type="button" className='myButton'onClick={()=>setText("cuir")}>
Effet Cuir
</button>
<button type="button" className='myButton'onClick={()=>setText("satinee")}>
Effet Satine
</button>
<button type="button" className='myButton'onClick={()=>setText('antique')}>
Effet Antique
</button>
<button type="button" className='myButton'onClick={()=>setText('velours')}>
Effet De Velour
</button>
      </div>
      <div className='gamme_product'>
      
      {Data_deco?.filter((data)=> text==="all"?data:data.effet.includes(text)).map((el)=>(
              <Carte key={el.id} title = {el.title}
                        imgUrl={el.imgUrl} 
                        description = {el.description}
                        
                />
          ))} 
        
    
        

      </div>
      </div>
    </div>
  )
}

export default Peinture_interieur