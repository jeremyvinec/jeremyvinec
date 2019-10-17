import React from 'react'

import webapp from '../assets/img/webapp.jpg'
import mobile from '../assets/img/mobile.jpg'

export default class Services extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="section-header">
                <h3>Services</h3>
                <p>ReactJS & React Native</p>   
              </header>
              <div className="row">
                <div className="col">
                  <div className="circles">
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
                    <img src={webapp} alt='webapp'/>
                  </div>
              </div>
              <div className="row spacing-section">
                    <div className="col text-right">
                      <img src={mobile} width="446" alt='mobile'/>
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
            </React.Fragment>
        )
    }
}