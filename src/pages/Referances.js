import React from 'react'
import Carte from '../components/Carte'
import { Data_Ref } from '../datas/References'
import '../styles/references.css'

const Referances = () => {
  return (
    <div className='reference'>
      <div className='reference_description'>
      <h2 className="title">REFERENCES</h2>
      <div className='description'>
      <p>
            Karim_Deco est une entreprise Spécialisée dans les travaux de
            peinture, la décoration d'intérieur et la rénovation des logements
            et les bureaux.
          </p>
          <p>
            Karim_Deco prend en charge tous vos chantiers de peinture intérieure
            et extérieure, et vous conseille dans le choix des couleurs ainsi
            que des matériaux les mieux adaptés à votre habitat
          </p>
      </div>
      </div>
      <div className='reference_gallery'>
      <h2 className="title">QUELQUES RÉALISATIONS</h2>
      <div className='gallery'>
      {Data_Ref?.map((el)=>(
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

export default Referances