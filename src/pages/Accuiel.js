import React from "react";

import  '../styles/accuiel.css'

const Accuiel = () => {
  return (
    <div className="accuiel">
      < div className="presentation_accuiel">
        <div className="gallery_accuiel">
        <img
          
          src="gallery\presentation\decolux1.png"
          alt="First slide"
        />
  </div>

          
        <div className="discrption_entreprise">
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
          <p>
            La société dispose d'un groupe de spécialistes et de formateurs
            qualifiés avec une grande efficacité ont contribué à la formation
            aux plusieurs opérateurs dans le domaine de la peinture décorative.
            Et fait de la société un cours spécifique dans la mise en œuvre des
            projets dès que possible en tenant compte de l'efficacité et la
            touche artistique unique, N’ira leur longue expérience et une grande
            expertise dans ce domaine .
          </p>
        </div>
      </div>
      <div className="maision">
        <div className="mais">
          <h2 className="title">NOTRE PHILOSOPHIE</h2>
          <p>
            Établie depuis 2015, la société à sa prise de conscience fondateurs
            de l'importance de la touche artistique et de travail à temps plein
            pleinement aux exigences des professionnels des décorateurs,
            architectes et pour le citoyen moyen qui se soucie de charme haut de
            gamme et de la perfection.
          </p>
        </div>
        <div className="mais">
          <h2 className="title">NOTRE MISSION</h2>
          <ul>
            <li>Redonnez vie à votre intérieur en toute simplicité</li>
            <li>
              Forts de nombreuses années d’expérience, à l’écoute de toutes vos
              envies de rénovation intérieure et font le nécessaire pour
              atteindre votre entière satisfaction.
            </li>
            <li>Adapter la faisabilité de votre projet à votre budget.</li>
            <li>
              Nous sélectionnons le meilleur matériel et nous travaillons avec
              les plus grandes marques.
            </li>
            <li>
              Concevoir des espaces de vie fonctionnels, distinctifs,
              compétitifs et à la pointe des dernières tendances déco.
            </li>
          </ul>
        </div>
        <div className="mais">
          <h2 className="title">CE QUE NOUS FAISONS</h2>
          <ul>
            <li>
              La bonne préparation du support : une des clés de la réussite.
            </li>
            <li>Ravalement de façades et peinture extérieure.</li>
            <li>Peinture à effet décoratif: patine, stucco, faux bois,….</li>
            <li>Peinture intérieure tous styles sur murs et plafonds.</li>
            <li>
              Peintures sur différents supports (brique, plâtre, bois, matériel,
              etc.)
            </li>
            <li>
              On vous conseille dans le choix des couleurs ainsi que des
              matériaux les mieux adaptés à votre habitat
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accuiel;
