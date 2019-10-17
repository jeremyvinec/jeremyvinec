import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
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
                            <li>
                                <a href="https://www.facebook.com/jeremy.yvinec" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} aria-hidden="true"></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Jeremyvinec" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} aria-hidden="true"></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/jeremyvinec/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} aria-hidden="true"></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jeremyvinec/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jeremyvinec" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} aria-hidden="true"></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}