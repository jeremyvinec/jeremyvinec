import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active: false,
            invert: false
        }
    }

    _active = () => {
        this.setState({ active: !this.state.active })
    }

    _invert = () => {
        this.setState({ invert: !this.state.invert })
    }

    _handleScroll = e => {
        console.log('ok')
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.setState({ invert: !this.state.invert })
        }
      }

    render() {
        const invert = this.state.invert ? 'invert' : ''
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a href={link.link} key={index}>{link.label}</a>
            ) : (
                <a href={link.link} key={index}>{link.label}</a>
            );

            return (
                <li className="menu-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav onScroll={this._handleScroll}>
                <input type="checkbox" id="chk"></input>
                <label htmlFor="chk" className="show-menu-btn" onClick={this._toggle}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>

                <div id="top-menu">
                    <ul className="line-nav">
                        {linksMarkup}
                        <label htmlFor="chk" className={`hide-menu-btn ${invert}`} onClick={this._toggle}>
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </label>
                    </ul>
                    <div className="nav-social-media">
                        <div className="social-title">Réseaux sociaux</div>
                        <div className="intro">Je raconte ma vie par ici</div>
                        <ul>
                            <li><a href="https://www.facebook.com/jeremy.yvinec" target="_blank"><FontAwesomeIcon icon={faFacebook} aria-hidden="true"></FontAwesomeIcon></a></li>
                            <li><a href="https://twitter.com/Jeremyvinec" target="_blank"><FontAwesomeIcon icon={faTwitter} aria-hidden="true"></FontAwesomeIcon></a></li>
                            <li><a href="https://www.instagram.com/jeremyvinec/" target="_blank"><FontAwesomeIcon icon={faInstagram} aria-hidden="true"></FontAwesomeIcon></a></li>
                            <li><a href="https://www.linkedin.com/in/jeremyvinec/" target="_blank"><FontAwesomeIcon icon={faLinkedin} aria-hidden="true"></FontAwesomeIcon></a></li>
                            <li><a href="https://github.com/jeremyvinec" target="_blank"><FontAwesomeIcon icon={faGithub} aria-hidden="true"></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                </div>

                <label className={`menu-btn-contact ${invert}`}>
                    <a href="/Contact">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </label>
            </nav>
        );
    }
}