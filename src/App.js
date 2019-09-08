import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import photo from './assets/img/photo.png'
import cv from './assets/img/cv.png' 
import webapp from './assets/img/progressive-web-app.png'
import mobile from './assets/img/webdesign-ui.png'
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
      <div className="container">
          <header className="header">
            <Menu links={links}></Menu>
          </header>
          <main>
            
            <section id="a_propos" className="centered-container">
              <header className="section-header">
                <h2>À propos</h2>
                <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
              </header>
              <div className="row">
                <div className="col-2">
                  <img className="img-profil" src={photo} alt="Moi"/>
                </div>
                <div className="col-8 text-left">
                  <h5>JEREMY YVINEC</h5>
                  <h5>DÉVELOPPEUR FRONT-END</h5>
                  <p>
                    Développeur passionné depuis quelques années, ma passion de l'informatique m'a poussé à approfondir mes connaissances dans le développement de site internet et d’application mobile. 
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
                <h2>Services</h2>
                <p>ReactJS & React Native</p>   
              </header>
              <div className="row">
                <div className="col text-right react-logo">
                  <span className="nucleo"></span>
                </div>
                <div className="col">
                  Brièvement, <b>React JS</b> est une librairie JavaScript <br/>
                  Open Source mettant à disposition des développeurs <br/>
                  une logique de composants permettant une grande performance. <br/><br/>
                  Alors que nous utilisons <b>React JS</b> pour concevoir des <b>sites internet</b><br/>
                  ou des <b>webapps, React Native</b> nous permet de concevoir<br/>
                  des <b>applications mobiles</b> et <b>tablettes</b> « cross-platform ».
                </div>
              </div>
              <div className="row spacing-section">
                  <div className="col text-left">
                    <h4>Les avantages</h4>
                    <h3>Développement React JS</h3>
                      <p className="spacing">
                        Créer un <b>site internet</b> ou une <b>webapp</b> en <b>React JS</b> est un choix stratégique qui pourrait bien faire la différence grâce à :
                      </p>
                      <div>
                        <ol>
                          <li>
                            <span>
                              <b>La logique composants</b> pour les designers et développeurs, ce qui se traduit par une uniformisation du support et  gain de temps tout au long du projet.
                            </span>
                          </li>
                          <li>
                            <span>
                              <b>Un temps de chargement très court</b> : les utilisateurs devenant de plus en plus exigeants, afficher une page instantanément est devenu indispensable et la vitesse de chargement de la page s’en voit considérablement optimisée grâce à React JS et son DOM virtuel qui charge uniquement les parties « interactives ».
                            </span>
                          </li>
                          <li>
                            <span>
                              <b>Une expérience utilisateur plus fluide</b> : le site s’apparente à une web application pour mieux guider et convertir l’utilisateur.
                            </span>
                          </li>
                          <li>
                            <span>
                             <b>Une maintenance et des évolutions facilitées</b> grâce à un code propre dû à un code structuré et organisé.
                            </span>
                          </li>
                        </ol>
                      </div>
                  </div>
                  <div className="col text-left">
                    <img src={webapp} width="446"/>
                  </div>
              </div>
              <div className="row spacing-section">
                    <div className="col text-right">
                      <img src={mobile} width="446"/>
                    </div>
                    <div className="col text-left">
                      <h4>Les avantages</h4>
                      <h3>Développement React Native</h3>
                        <p className="spacing">
                          <b>React Native</b> découle de <b>React JS</b> et permet de créer des 
                          <b>applications mobiles hybrides, de bureau ou interactives</b>, avec un seul et même code commun (iOS, Windows, Android par exemple), 
                          tout en pouvant développer un langage spécifique à chaque OS.
                        </p>
                        <div>
                          <p className="spacing">Cela permet ainsi :</p>
                          <ol>
                            <li>
                              <span>
                                <b>Un gain de temps considérable </b>: React Native permet de coder une seule fois pour plusieurs plateformes.
                              </span>
                            </li>
                            <li>
                              <span>
                                <b>Une flexibilité </b>: React Native laisse la possibilité d’intégrer des fonctionnalités natives pour offrir une expérience utilisateur encore plus poussée.
                              </span>
                            </li>
                            <li>
                              <span>
                                <b>Une performance comparable à une application native </b>: même entièrement développée en React Native, l’application hybride sera tout aussi performante qu’une application native grâce à sa compilation et à son interprétation pour les différents OS.
                              </span>
                            </li>
                            <li>
                              <span>
                                <b>Des évolutions facilitées </b>: React Native fonctionne avec la logique de composants qui sont à la fois réutilisables, modifiables, interchangeables… ce qui facilite considérablement la maintenance des applications.
                              </span>
                            </li>
                          </ol>
                        </div>
                    </div>
              </div>  
            </section>

            <section id="competences" className="centered-container">
            <header className="section-header">
              <h2>Compétences</h2>
              <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
            </header>
            <ul className="skills-list">
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Framework <strong>React.js</strong> / <strong>React Native</strong></li>
              <li>Framework <strong>Redux</strong></li>
              <li><strong>HTML5</strong> / <strong>CSS3</strong></li>
              <li>Responsive Web</li>
              <li>Framework <strong>Bootstrap</strong></li>
              <li>Préprocesseurs <strong>Sass</strong></li>
              <li>PHP <strong>POO</strong> / <strong>MVC</strong></li>
              <li>Framework <strong>Laravel</strong></li>
              <li>SQL <strong>MYSQL</strong></li>
              <li>CMS <strong>WordPress</strong></li>
              <li>Outil <strong>Photoshop</strong> / <strong>VSCode</strong> / <strong>Android Studio</strong></li>
              <li>...</li>
            </ul>
          </section>

          <section id="portfolio" className="centered-container">
            <header className="section-header">
              <h2>Portfolio</h2>
              <p>Une sélection de projets sur lesquels j'ai pu intervenir. (en cours)</p>   
            </header>
            <div className="portfolio">
              <ul>
                <li className="button_portfolio active_box" data-filter="all">All</li>
                <li className="button_portfolio" data-filter="Dev_Web">Développement Web</li>
                <li className="button_portfolio" data-filter="Dev_Mobile">Développement Mobile</li>
              </ul>

              <ul id="gallery" className="pure-js-lightbox-container">
                <li className="box filter Dev_Web"><a href="http://www.camorlaix.bzh/" target="_blank"><img src={lta} alt="Site Web Léon Trégor Athlétisme"/></a></li>
                <li className="box filter Dev_Web"><a href={bps}><img src={bps} alt="Site Web Bretagne Pompes Services"/></a></li>
                <li className="box filter Dev_Mobile"><a href={ima}><img src={ima} alt="Application Mobile Ivtracer NetCeler"/></a></li>
              </ul>
            
            </div>
          </section>

          <section id="contact" className="centered-container">
            <header className="section-header">
              <h2>Contact</h2>
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
