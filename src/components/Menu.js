import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.3)'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 500) {
          this.setState({color: 'black', borderColor: 'rgba(30,29,32,0.2)' })
        } else {
          this.setState({color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)' })
        }
    }

    marginLeft = () => {
        let chk = document.getElementById('chk')
        let slide = document.getElementById('slide')
        if (chk.checked === true) {
            slide.style.marginLeft = 'auto'
            slide.style.opacity = "1";
        } else {
            slide.style.marginLeft = '300px'
            slide.style.opacity = "0.7";
        }
    }

    render() {
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a href={link.link} key={index}>{link.label}</a>
            ) : (
                <a href={link.link} key={index}>{link.label}</a>
            );

            return (
                <li className="menu-item" key={index}>
                    {linkMarkup}
                </li>
            );
        });
        const { color, borderColor } = this.state

        return (
            <nav>
                <input type="checkbox" id="chk"></input>
                <label  htmlFor="chk" 
                        className="show-menu-btn" 
                        onClick={this.marginLeft} 
                        style={{color: color, borderColor: borderColor}}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>

                <div id="top-menu">
                    <ul className="line-nav">
                        {linksMarkup}
                        <label htmlFor="chk" className="hide-menu-btn" onClick={this.marginLeft} style={{color: color, borderColor: borderColor}}>
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </label>
                    </ul>
                    <div className="nav-social-media">
                        <div className="social-title">Réseaux sociaux</div>
                        <div className="intro">Je raconte ma vie par ici</div>
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

                <a href="mailto:jeremy.yvinec@gmail.com" title="Cliquer sur ce lien est une bonne idée.">
                    <label className="menu-btn-contact" style={{color: color, borderColor: borderColor}}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </label>
                </a>
            </nav>
        );
    }
}