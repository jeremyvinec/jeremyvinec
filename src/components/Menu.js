import React from 'react'

export default class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    }

    _active = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        const active = this.state.active ? 'active' : ''
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a href={link.link}>{link.label}</a>
            ) : (
                <a href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className={`${active}`} onClick={this._active}>
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav>
                <ul id="top-menu">
                    {linksMarkup}
                </ul>
            </nav>
        );
    }
}