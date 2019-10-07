import React from 'react';
import Menu from './components/Menu'
import Cover from './components/Cover'
import Footer from './components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import photo from './assets/img/photo.png'
import cv from './assets/img/cv.png' 
import webapp from './assets/img/webapp.jpg'
import mobile from './assets/img/mobile.jpg'
import lta from './assets/img/lta.jpg'
import bps from './assets/img/maquette-bps.png'
import ima from './assets/img/ivtracer-app.png'

class App extends React.Component {

  render(){
    let links = [
      { label: 'À propos', link: '#a_propos', active: true},
      { label: 'Services', link: '#services'},
      { label: 'Compétences', link: '#competences'},
      { label: 'Portfolio', link: '#portfolio'},
      { label: 'Contact', link: '#contact'},
    ]
    
    return (
      <div id="content">
          <header className="header">
            <div className="logo">Jeremyvinec</div>
              <Menu links={links}></Menu>
          </header>
          <section  className="fat-header">
              <div className="header_img"/>
              <div className="header_title">
              <h2>Développement web et app</h2>
              <h1>ReactJS & React Native</h1>
            </div>
          </section>
          <main id="slide" className="container">
            <section id="a_propos" className="centered-container">
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
                    <a href={cv} target="_blank">
                      <span></span>
                      télécharger mon cv
                    </a>
                  </div>
                </div>
              </div>           
            </section>

            <section id="services">
              <header className="section-header">
                <h3>Services</h3>
                <p>ReactJS & React Native</p>   
              </header>
              <div className="row">
                <div className="col">
                  <div class="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                  </div>
                </div>
                <div className="col text-left">
                  <h4>Les avantages</h4>
                  <h2>React JS & React Native</h2>
                  <p className="spacing">
                      Brièvement, <b>React JS</b> est une librairie JavaScript Open Source<br/>
                      qui vise à simplifier le développement d'interfaces visuelles.<br/>
                      Développé sur Facebook et commercialisé en 2013, <br/>
                      il gère certaines des applications les plus utilisées,<br/>
                      notamment Facebook et Instagram, parmi d'innombrables autres applications.<br/><br/>
                      Alors que j'utilise <b>React JS</b> pour concevoir des <b>sites internet</b><br/>
                      ou des <b>webapps, React Native</b> permet de concevoir<br/>
                      des <b>applications mobiles</b> et <b>tablettes</b>.
                    </p>
                </div>
              </div>
              <div className="row spacing-section">
                  <div className="col text-left">
                    <h4>Les avantages</h4>
                    <h2>Développement React JS</h2>
                      <p className="spacing">
                        Créer un <b>site internet</b> ou une <b>WebApp</b> en <b>React JS</b> est un choix stratégique.<br/>
                        Les faibles coûts de développement, l'utilisation des données, l'espace de stockage et autres ne sont pas les seuls avantages des <b>PWA</b>. :
                      </p>
                      <div>
                        <ol>
                          <li>
                            <span>
                              <b>Des performance imbattable</b>: le Vitual DOM permet de savoir ce qui change vraiment 
                              dans votre interface utilisateur et restitue le rendu de ce qui a vraiment changé, d'où de meilleures performances.
                            </span>
                          </li>
                          <li>
                            <span>
                              <b>Bon pour le référencement</b> : le référencement est le pilier d'une entreprise prospère.
                              Un meilleure classement équivaut à une plus grande implication des personnes, ce qui génère plus de revenus.
                              ReactJS offre relativement une vitesse plus rapide en réduisant le temps de chargement de la page, ce qui permet d'utiliser le référencement de manière utile.
                            </span>
                          </li>
                          <li>
                            <span>
                              <b>Mode hors ligne</b> : Une PWA enregistre le cache du site Web, ce qui permet aux utilisateurs d'accéder à tout le contenu en l'absence d'une connectivité médiocre ou inexistante.
                            </span>
                          </li>
                          <li>
                            <span>
                             <b>Sécurité renforcée</b> La principale exigence d'un site Web pour s'appeler une application Web progressive est qu'il doit être sécurisé par HTTPS. 
                             L'activation de HTTPS assure la sécurité des données et réduit le risque de problèmes de sécurité ou de falsification des données..
                            </span>
                          </li>
                        </ol>
                      </div>
                  </div>
                  <div className="col text-left">
                    <img src={webapp}/>
                  </div>
              </div>
              <div className="row spacing-section">
                    <div className="col text-right">
                      <img src={mobile} width="446"/>
                    </div>
                    <div className="col text-left">
                      <h4>Les avantages</h4>
                      <h2>Développement React Native</h2>
                        <p className="spacing">
                          Suivant <b>ReactJS</b>, <b>React Native</b> est un cadre de développement d'applications mobiles multi-plateformes pour iOS et Android.
                          Si vous souhaitez économiser du temps, de l'argent et des ressources en personnel, alors React Native est la solution idéale pour vous.
                        </p>
                        <div>
                          <ol>
                            <li>
                              <span>
                                <b>Gagnez du temps et de l'argent  </b>: avec React Native, le même code est utilisé pour le déploiement sur les plateformes iOS et Android. 
                                Vous économisez du temps et de l’argent en raccourcissant le cycle de développement.
                              </span>
                            </li>
                            <li>
                              <span>
                                <b>Vitesse et performance </b>: C’est probablement la raison la plus importante de choisir React Native pour votre projet. 
                                React Native est léger, extrêmement rapide, et ne consomme pas trop de ressources.
                              </span>
                            </li>
                            <li>
                              <span>
                                <b>Fiabilité </b>: React Native est largement adopté par les développeurs et les grandes entreprises, ce qui en fait un cadre mobile très fiable. 
                                Il n'y a aucune chance que cette technologie disparaisse dans quelques années, car Facebook a des projets ambitieux pour son développement ultérieur.
                              </span>
                            </li>
                            <li>
                              <span>
                                <b>Ajouter des plugins tiers </b>: React Native vous permet également d'intégrer facilement des plug-ins et des API tiers, notamment des cartes et des systèmes de paiement.
                              </span>
                            </li>
                          </ol>
                        </div>
                    </div>
              </div>  
            </section>

            <section id="competences" className="centered-container">
            <header className="section-header">
              <h3>Compétences</h3>
              <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
            </header>
            <ul className="skills-list">
              <li>Front-end <strong>HTML</strong> / <strong>CSS</strong> / <strong>Javascript</strong></li>
              <li>Préprocesseurs <strong>Sass</strong></li>
              <li>Frameworks <strong>React.js</strong>  / <strong>React Native</strong> / <strong>Redux</strong> / <strong>Bootstrap</strong></li>
              <li>Back-end <strong>Node.js</strong></li>
              <li>Framework <strong>Express</strong></li>
              <li>Base de données <strong>MongoDB</strong></li>
              <li>API <strong>WebSockets</strong></li>
              <li>IDE <strong>VSCode</strong></li>
              <li>Méthodologie Agile <strong>SCRUM</strong></li>
              <li>Outils <strong>Git</strong> / <strong>Photoshop</strong></li>
              <li>...</li>
            </ul>
          </section>

          <section id="portfolio" className="centered-container">
            <header className="section-header">
              <h3>Portfolio</h3>
              <p>Une sélection de projets sur lesquels j'ai pu intervenir. (en cours)</p>   
            </header>
            <div className="grid">
              <div class="container_image">
                <img src={ima} className="image"/>
                <div class="middle">
                  <div class="text">IVTracer</div>
                </div>
              </div>
              <div class="container_image">
                <img src={bps} className="image"/>
                <div class="middle">
                  <div class="text">Bretagne Pompes Services</div>
                </div>
              </div>
              <div class="container_image">
                <img src={lta} className="image"/>
                <div class="middle">
                  <div class="text">Léon Trégor Athlétisme</div>
                </div>
              </div>
              <div class="container_image">
                <img src={lta} className="image"/>
                <div class="middle">
                  <div class="text">John Doe</div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <header className="section-header">
              <h3>Contact</h3>
              <p>Et si on travaillait ensemble ?</p>   
            </header>
            <div>
              <p>
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true"></FontAwesomeIcon>
                <strong>Ecrivez-moi</strong>
              </p>
              <a className="email" href="mailto:jeremy.yvinec@gmail.com" title="Cliquer sur ce lien est une bonne idée.">
                jeremy.yvinec@gmail.com
              </a>
            </div>
            <br/>
            <div>
              <FontAwesomeIcon icon={faCalendar} aria-hidden="true"></FontAwesomeIcon>
              <strong>Disponibilités</strong>
              <p>sur demande</p>
            </div>
            <br/>
            <div>
              <FontAwesomeIcon icon={faShareSquare} aria-hidden="true"></FontAwesomeIcon>
              <strong>Je raconte ma vie par ici</strong>
              <br/>
            <div className="social-media">
              <ul>
                <li><a href="https://www.facebook.com/jeremy.yvinec" target="_blank"><FontAwesomeIcon icon={faFacebook} aria-hidden="true"></FontAwesomeIcon></a></li>
                <li><a href="https://twitter.com/Jeremyvinec" target="_blank"><FontAwesomeIcon icon={faTwitter} aria-hidden="true"></FontAwesomeIcon></a></li>
                <li><a href="https://www.instagram.com/jeremyvinec/" target="_blank"><FontAwesomeIcon icon={faInstagram} aria-hidden="true"></FontAwesomeIcon></a></li>
                <li><a href="https://www.linkedin.com/in/jeremyvinec/" target="_blank"><FontAwesomeIcon icon={faLinkedin} aria-hidden="true"></FontAwesomeIcon></a></li>
                <li><a href="https://github.com/jeremyvinec" target="_blank"><FontAwesomeIcon icon={faGithub} aria-hidden="true"></FontAwesomeIcon></a></li>
              </ul>
            </div>
            </div>
          </section>

          </main>
          <footer className="cc-footer">
            <Footer/>
          </footer>
      </div>
    )
  }
}

export default App;
