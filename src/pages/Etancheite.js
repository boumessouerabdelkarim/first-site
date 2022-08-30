import React from 'react'
import '../styles/etanchiete.css'
import { Data } from '../datas/Data_etanch'
import Carte from '../components/Carte'

const Etancheite = () => {
  return (
    <div className="etanchiete">
       <div className="presentation_etanchiete">
        <div className="gal_etanchiete">
        <img
          
          src="/etanchite.jpg"
          alt="First slide"
        />
        </div>
        <div className="description_etanchiete">
        <h2 className="title">ETANCHIETE</h2>
          <p>
          Dans la construction, l’étanchéité a pour but d’empêcher tout élément extérieur non désiré (pluie, vent…) d’entrer dans le bâtiment ou de mettre en danger sa construction même.
           Il s’agit donc d’éviter toute dégradation naturelle provoquée notamment par les intempéries.
          </p>
          <p>
          Notre entreprise est spécialisés dans le domaine de l’étanchéité, plus particulièrement dans les travaux suivants de :
          </p>
          <ul>
            <li>étanchéité toit, toiture terrasse, terrasse toit, résine, balcons, garages, caves, sous- sols (voile enterrée), etc.</li>
            <li>rénovation terrasse et terrasse étanchiéité,</li>
            <li>réparation et isolation toiture terrasse</li>
            <li>etancheite piscine,etancheite alimentaire,etancheite reservoirs</li>
          </ul>
        </div>
      </div>
      <h2 className="title">TRAVAUX D'ETANCHIETE</h2>
      <div className="gamme_products">
      {Data?.map((el)=>(
              <Carte key={el.id} title = {el.title}
                        imgUrl={el.imgUrl} 
                        description = {el.description}
                        
                />
          ))} </div>
    </div>
  )
}

export default Etancheite