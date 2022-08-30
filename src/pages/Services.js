import React from 'react'
import '../styles/services.css'
import {Link} from 'react-router-dom'
const Services = () => {
  return (
    <div className='services'>
      <Link to='/services/Peinture_interieur'><div className='service_item'>
<div className='img_size'><img  src='gallery\services\peinture_interieur.png' alt='peinture'/></div>
<h6>PEINTURE D'INTÉRIEUR</h6>
<div className='description_item'>
Tout une gamme de produits pour la peinture sur murs, sur bois sur fer.
 Peintures decoratives murales Stucco, Effet sablé, Effet de terre, Effet papillon,
 Effet soie Mastics et tous les teintes de peinture a l'eau...
</div>
      </div></Link>
     <Link to='/services/Peinture_exterieur'><div className='service_item'>
      <div className='img_size'><img  src='gallery\services\peinture_exterieur.png' alt='peinture'/></div>
<h6>PEINTURE D'EXTÉRIEUR</h6>
<div className='description_item'>
La peinture extérieure permet à votre maison d’être protégée des intempéries tout en mettant en valeur le côté esthétique.
 tous type de peinture tel que : Grafiatto, Peinture a base d'eau ,Mastic exterieur ....
</div>
      </div></Link> 
      <Link to='/services/Revetements_sol'>  <div className='service_item'>
     <div className='img_size'> <img  src='gallery\services\pose-de-sol.png' alt='peinture'/></div>
<h6>REVÊTEMENTS DE SOLS</h6>
<div className='description_item'>
Spécialisés dans le domaine de revetement sol moderne, plus particulièrement dans les travaux suivants de :Beton cire,sols en resine et beton imprime decoratif.
</div>
      </div></Link> 
      <Link  to='/services/Etancheite'> <div className='service_item'>
      <div className='img_size'><img  src='gallery\services\picto_etancheite.png' alt='peinture'/></div>
<h6>TRAVAUX D'ETANCHIETE</h6>
<div className='description_item'>
Spécialisés dans le domaine de l’étanchéité, plus particulièrement dans les travaux suivants de :
 étanchéité toit, toiture terrasse, terrasse toit, résine, balcons, garages, caves, sous- sols (voile enterrée), etc.
,rénovation terrasse et terrasse étanchiéité,,réparation et isolation toiture terrasse.

</div>
      </div></Link> 
    </div>
  )
}

export default Services