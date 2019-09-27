import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
                <a href={link.link}>{link.label}</a>
            ) : (
                <a href={link.link}>{link.label}</a>
            );

            return (
                <li>
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav onScroll={this._handleScroll}>
                <input type="checkbox" id="chk"></input>
                <label for="chk" className="show-menu-btn" onClick={this._toggle}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>

                <ul id="top-menu">
                    {linksMarkup}
                    <label for="chk" className={`hide-menu-btn ${invert}`} onClick={this._toggle}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </label>
                </ul>

                <label className={`menu-btn-contact ${invert}`}>
                    <a href="/Contact">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </label>
            </nav>
        );
    }
}