import React from 'react'

import bps from '../assets/img/bps.png'
import ima from '../assets/img/ivtracer-app.png'

export default class Portfolio extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="section-header">
                    <h3>Portfolio</h3>
                    <p>Une sélection de projets sur lesquels j'ai pu intervenir. (en cours)</p>   
                </header>
                <div className="grid">
                <div class="container_image">
                    <img src={ima} className="image"/>
                    <div class="middle">
                    <div class="text">IVTracer</div>
                    </div>
                </div>
                <div class="container_image">
                    <img src={bps} className="image"/>
                    <div class="middle">
                    <div class="text">Bretagne Pompes Services</div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}