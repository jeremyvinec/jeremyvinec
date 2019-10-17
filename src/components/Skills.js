import React from 'react'

export default class Skills extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="section-header">
                    <h3>Compétences</h3>
                    <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
                </header>
                <ul className="skills-list">
                <li>Front-end <strong>HTML</strong> / <strong>CSS</strong> / <strong>Javascript</strong></li>
                <li>Préprocesseurs <strong>Sass</strong></li>
                <li>Frameworks <strong>React.js</strong>  / <strong>React Native</strong> / <strong>Redux</strong> / <strong>Bootstrap</strong></li>
                <li>Back-end <strong>Node.js</strong></li>
                <li>Framework <strong>Express</strong></li>
                <li>Base de données <strong>MongoDB</strong> / <strong>Firebase</strong> / <strong>AWS</strong></li>
                <li>API <strong>WebSockets</strong> / <strong>Elasticsearch</strong></li>
                <li>IDE <strong>VSCode</strong></li>
                <li>Méthodologie Agile <strong>SCRUM</strong></li>
                <li>Outils <strong>Git</strong> / <strong>Photoshop</strong></li>
                <li>...</li>
                </ul>
            </React.Fragment>
        )
    }
}