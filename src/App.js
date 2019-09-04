import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer'

import webapp from './assets/img/progressive-web-app.png'
import mobile from './assets/img/webdesign-ui.png'

class App extends React.Component {
  render(){
    let links = [
      { label: 'Home', link: '#home', active: true},
      { label: 'About', link: '#about'},
      { label: 'Portfolio', link: '#portfolio'},
      { label: 'Contact', link: '#contact'},
    ]
    return (
      <div className="container">
          <header>
            <Menu links={links}></Menu>
          </header>
          <main>
            
            <section id="a_propos" className="container">
              <header className="section-header">
                <h2>À propos</h2>
                <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
              </header>
              <div className="row">
                <div className="col-2">
                  <img class="img-profil" src="./assets/img/photo.png" alt="Moi"/>
                </div>
                <div className="col-8 text-left">
                  <h3>JEREMY YVINEC</h3>
                  <h3>DÉVELOPPEUR FRONT-END</h3>
                  <p>
                    Développeur passionné depuis quelques années, ma passion de l'informatique m'a poussé à approfondir mes connaissances dans le développement de site internet et d’application mobile. 
                  </p>
                </div>
                <div class="button_submit">
                  <a href="img/cv_jeremyvinec.png" target="_blank">
                    <span></span>
                    télécharger mon cv
                  </a>
              </div>
              </div>           
            </section>

            <section>
              <header className="section-header">
                <h2>Services</h2>
                <p>ReactJS & React Native</p>   
              </header>
              <div className="text-left">
                Brièvement, React JS est une librairie JavaScript <br/>
                Open Source mettant à disposition des développeurs <br/>
                une logique de composants permettant une grande performance. <br/>
                Alors que nous utilisons React JS pour concevoir <br/>
                des sites internet ou des webapps, React Native <br/>
                nous permet de concevoir des applications mobiles et tablettes « cross-platform ».
              </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img source={{ uri: webapp }}/>
                  </div>
                  <div className="col text-left">
                    <h3>React JS</h3>
                      <p>
                        React Native découle de React JS et permet de créer des 
                        applications mobiles hybrides, de bureau ou interactives, avec un seul et même code commun (iOS, Windows, Android par exemple), 
                        tout en pouvant développer un langage spécifique à chaque OS.
                      </p>
                      <div>
                        <p>Cela permet ainsi :</p>
                        <ol>
                          <li>
                            <p>
                              <b>Un gain de temps considérable </b>: React Native permet de coder une seule fois pour plusieurs plateformes.
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Une flexibilité </b>: React Native laisse la possibilité d’intégrer des fonctionnalités natives 
                              pour offrir une expérience utilisateur encore plus poussée.
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Une performance comparable à une application native </b>: même entièrement développée en React Native, 
                              l’application hybride sera tout aussi performante qu’une application native grâce à sa compilation et à son interprétation pour les différents OS.
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Des évolutions facilitées </b>: React Native fonctionne avec la logique de composants 
                              qui sont à la fois réutilisables, modifiables, interchangeables… ce qui facilite considérablement la maintenance des applications.
                            </p>
                          </li>
                        </ol>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col text-left">
                      <h3>React Native</h3>
                        <p>
                          React Native découle de React JS et permet de créer des 
                          applications mobiles hybrides, de bureau ou interactives, avec un seul et même code commun (iOS, Windows, Android par exemple), 
                          tout en pouvant développer un langage spécifique à chaque OS.
                        </p>
                        <div>
                          <p>Cela permet ainsi :</p>
                          <ol>
                            <li>
                              <p>
                                <b>Un gain de temps considérable </b>: React Native permet de coder une seule fois pour plusieurs plateformes.
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Une flexibilité </b>: React Native laisse la possibilité d’intégrer des fonctionnalités natives pour offrir une expérience utilisateur encore plus poussée.
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Une performance comparable à une application native </b>: même entièrement développée en React Native, l’application hybride sera tout aussi performante qu’une application native grâce à sa compilation et à son interprétation pour les différents OS.
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Des évolutions facilitées </b>: React Native fonctionne avec la logique de composants qui sont à la fois réutilisables, modifiables, interchangeables… ce qui facilite considérablement la maintenance des applications.
                              </p>
                            </li>
                          </ol>
                        </div>
                    </div>
                    <div className="col">
                      <img source={{ uri: mobile }}/>
                    </div>
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

          <section id="contact" className="centered-container">
            <header className="section-header">
              <h2>Contact</h2>
              <p>Et si on travaillait ensemble ?</p>   
            </header>
            <div>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <strong>Ecrivez-moi</strong>
              </p>
              <a className="email" href="mailto:jeremy.yvinec@gmail.com" title="Cliquer sur ce lien est une bonne idée.">
                jeremy.yvinec@gmail.com
              </a>
            </div>
            <br/>
            <div>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <strong>Disponibilités</strong>
              <p>sur demande</p>
            </div>
            <br/>
            <div>
              <i className="fa fa-share-square" aria-hidden="true"></i>
              <strong>Je raconte ma vie par ici</strong>
              <br/>
            <div className="social-media">
              <ul>
                <li><a href="https://www.facebook.com/jeremy.yvinec" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/Jeremyvinec" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/jeremyvinec/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/jeremyvinec/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/jeremyvinec" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            </div>
          </section>

          </main>
          <footer class="cc-footer">
            <Footer/>
          </footer>
      </div>
    )
  }
}

export default App;
