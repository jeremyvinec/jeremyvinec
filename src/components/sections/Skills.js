import React from 'react'
import Pagetitle from "../elements/Pagetitle";

function Skills() {
    return(
        <section id="skills">
            <Pagetitle 
                title="Compétences" 
                description="Les sujets sur lesquels je vais pouvoir vous aider." 
            />
            <div className="skills-content">
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
            </div>
        </section>
    )
}
export default Skills