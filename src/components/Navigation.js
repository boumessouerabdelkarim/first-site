import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navigateur.css'
const Navigation = () => {
  return (
    <div className='Navigation'>
    <ul className='navigation-ul'>
        <img src="/logo.jpg" alt="logo" />

        <Link to='/'><li>Accuiel</li></Link>
        
        
        <Link  to='/Services'><li>Services</li>
        <ul className='under-list'>
         <Link to='/services/Peinture_interieur'><li>Peinture interieur</li></Link>
          <Link to='/services/Peinture_exterieur'><li>Peinture exterieur</li></Link>
          <Link to='/services/Revetements_sol'><li>Revetements sol</li></Link>
          <Link  to='/services/Etancheite'><li>Etancheite</li></Link>
        </ul>
        </Link>
        <Link to='/Referances'> <li>Referances</li></Link>
        <Link to='/Contact'><li>Contacts</li></Link>
        
        
    </ul>
</div>
  )
}

export default Navigation