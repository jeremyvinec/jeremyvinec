import React from 'react'

export default class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header class="section-header">
                <h2>À propos</h2>
                <p>Les sujets sur lesquels je vais pouvoir vous aider.</p>   
                </header>
                <div class="col-1 profil">
                    <img class="img-profil" src="img/photo.png" alt="Moi"/>
                </div>
                <div class="col-2">
                    <h3>Jeremy Yvinec, 22 ans.</h3>
                    <h3>Développeur Front-End</h3>
                    <p class="a_propos">
                        Développeur passionné depuis quelques années, ma passion de l'informatique m'a poussé à approfondir mes connaissances dans le développement de site internet et d’application mobile.
                        Mes expériences m’ont permis d’acquérir les compétences requises pour répondre de manière adaptée à vos besoins.
                        Aujourd'hui je mets ces compétences à votre disposition pour accompagner vos projets créatifs web et mobile qui nécessitent une maîtrise des technos modernes embarquées sur nos navigateurs.
                    </p>
                    <div class="button_submit">
                        <a href="img/cv_jeremyvinec.png" target="_blank">
                        <span></span>
                        télécharger mon cv
                        </a>
                    </div>
                </div>
            </React.Fragment>           
        )
    }
}