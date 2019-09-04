import React from 'react'


export default class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section id="contact" class="centered-container">
                    <header class="section-header">
                        <h2>Contact</h2>
                        <p>Et si on travaillait ensemble ?</p>   
                    </header>
                    <div>
                        <p>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <strong>Ecrivez-moi</strong>
                        </p>
                        <a class="email" href="mailto:jeremy.yvinec@gmail.com" title="Cliquer sur ce lien est une bonne idée.">
                            jeremy.yvinec@gmail.com
                        </a>
                        </div>
                        <br/>
                        <div>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <strong>Disponibilités</strong>
                            <p>sur demande</p>
                        </div>
                        <br/>
                        <div>
                            <i class="fa fa-share-square" aria-hidden="true"></i>
                            <strong>Je raconte ma vie par ici</strong>
                            <br/>
                        <div class="social-media">
                            <ul>
                                <li><a href="https://www.facebook.com/jeremy.yvinec" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/Jeremyvinec" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/jeremyvinec/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/jeremyvinec/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/jeremyvinec" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}