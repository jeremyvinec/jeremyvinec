import React from 'react'

import photo from '../assets/img/photo.png'
import cv from '../assets/img/cv.png' 

export default class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="section-header">
                <h3>À propos</h3>
                <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
              </header>
              <div className="row">
                <div className="col-2">
                  <img className="img-profil" src={photo} alt="Moi"/>
                </div>
                <div className="col-8 text-left">
                  <h5>Jérémy Yvinec</h5>
                  <h5>Développeur Front-End</h5>
                  <p className="spacing">
                    Développeur passionné depuis quelques années,<br/> ma passion de l'informatique m'a poussé à approfondir<br/> mes connaissances.<br/><br/>
                    J'ai un faible pour les projets ambitieux et mes technologies de prédilection actuelles sont : mobile (React Native), back-end (NodeJS, MongoDB) et React.js pour le front-end.<br/><br/>
                    Aujourd'hui je mets ces compétences à votre disposition<br/> pour accompagner vos projets créatifs web et mobile <br/> qui nécessitent une maîtrise des technos modernes embarquées sur nos navigateurs. 
                  </p>
                  <div className="button_submit">
                    <a href={cv} target="_blank" rel="noopener noreferrer">
                      <span></span>
                      télécharger mon cv
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>           
        )
    }
}