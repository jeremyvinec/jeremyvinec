import React from 'react'
import Menu from './Menu'
export default class Header extends React.Component {
    render(){
        let links = [
            { label: 'À propos', link: '#a_propos', active: true},
            { label: 'Services', link: '#services'},
            { label: 'Compétences', link: '#competences'},
            { label: 'Portfolio', link: '#portfolio'},
            { label: 'Contact', link: '#contact'},
          ]
        return(
            <React.Fragment>
                <header className="header">
                    <div className="logo">Jeremyvinec</div>
                    <Menu links={links}></Menu>
                </header>
                <section  className="fat-header">
                    <div className="header_img"/>
                    <div className="header_title">
                    <h2>Développement web et app</h2>
                    <h1>ReactJS & React Native</h1>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}