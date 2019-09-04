import React from 'react'

export default class Skills extends React.Component{
    redner(){
        return(
            <React.Fragment>
                <section id="competences" class="centered-container">
                    <header class="section-header">
                        <h2>Compétences</h2>
                        <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
                    </header>
                    <ul class="skills-list">
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Framework <strong>React.js</strong> / <strong>React Native</strong></li>
                        <li>Framework <strong>Redux</strong></li>
                        <li><strong>HTML5</strong> / <strong>CSS3</strong></li>
                        <li>Responsive Web</li>
                        <li>Framework <strong>Bootstrap</strong></li>
                        <li>Préprocesseurs <strong>Sass</strong></li>
                        <li>PHP <strong>POO</strong> / <strong>MVC</strong></li>
                        <li>Framework <strong>Laravel</strong></li>
                        <li>SQL <strong>MYSQL</strong></li>
                        <li>CMS <strong>WordPress</strong></li>
                        <li>Outil <strong>Photoshop</strong> / <strong>VSCode</strong> / <strong>Android Studio</strong></li>
                        <li>...</li>
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}