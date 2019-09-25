import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active: false,
            toggle: false
        }
    }

    _active = () => {
        this.setState({ active: !this.state.active })
    }

    _toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const toggle = this.state.toggle ? 'show' : ''
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
            <nav>
                <div className="logo">Jeremyvinec</div>
                <input type="checkbox" id="chk"></input>
                <label for="chk" className="show-menu-btn" onClick={this._toggle}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>

                <ul id="top-menu" className={`${toggle}`}>
                    {linksMarkup}
                    <label for="chk" class="hide-menu-btn" onClick={this._toggle}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </label>
                </ul>

                <label className="menu-btn-contact button_submit">
                    <a href="/Contact">
                        <span/>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </label>
            </nav>
        );
    }
}