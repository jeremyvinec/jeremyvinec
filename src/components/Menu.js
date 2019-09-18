import React from 'react'

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
        const active = this.state.active ? 'active' : ''
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
                <div className="menu-btn" onClick={this._toggle}>
                    ...
                </div>

                <ul id="top-menu" className={`${toggle}`}>
                    {linksMarkup}
                </ul>
            </nav>
        );
    }
}