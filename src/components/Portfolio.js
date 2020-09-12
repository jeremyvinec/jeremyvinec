import React from 'react'

import bps from '../assets/img/bps.png'
import ima from '../assets/img/ivtracer-app.png'
import yuka from '../assets/img/yuka.jpg'
import optitrainer from '../assets/img/optitrainer.png'
//import wilderness from '../assets/img/wilderness.jpg'

export default class Portfolio extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="section-header">
                    <h3>Portfolio</h3>
                    <p>Une sélection de projets sur lesquels j'ai pu intervenir. (en cours)</p>   
                </header>
                <div className="grid">
                <div className="container_image">
                    <img src={ima} className="image" alt="application mobile ivtracer"/>
                    <div className="middle">
                    <div className="text"><a className="link" href="https://ivtracer.com/" target="_blank" rel="noopener noreferrer">IVTracer</a></div>
                    </div>
                </div>
                <div className="container_image">
                    <img src={bps} className="image" alt="site web bretagne pompes services"/>
                    <div className="middle">
                    <div className="text">Bretagne Pompes Services</div>
                    </div>
                </div>
                <div className="container_image">
                    <img src={yuka} className="image" alt="Support de cours licence MIW 2018-2019 : créer un clone de Yuka. Serveur node.js et webapp react."/>
                    <div className="middle">
                    <div className="text"><a className="link" href="https://www.youtube.com/watch?v=BOOEVAaLoaY&feature=youtu.be" target="_blank" rel="noopener noreferrer">Yuka MIW</a></div>
                    </div>
                </div>
                <div className="container_image">
                    <img src={optitrainer} className="image" alt="optitrainer webapp"/>
                    <div className="middle">
                    <div className="text"><a className="link" href="https://www.optitrainer.fr/" target="_blank" rel="noopener noreferrer">Optitrainer</a></div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}