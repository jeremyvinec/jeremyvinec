import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default class App extends React.Component {

  render(){
    return (
      <div id="content">

          <Header/>

          <main id="slide" className="container">

            <section id="a_propos" className="centered-container">
              <About/>
            </section>

            <section id="services">
               <Services/>
            </section>

            <section id="competences" className="centered-container">
              <Skills/>
            </section>

            <section id="portfolio" className="centered-container">
              <Portfolio/>
            </section>

            <section id="contact">
              <Contact/>
            </section>

          </main>
          
          <footer className="cc-footer">

            <Footer/>

          </footer>
      </div>
    )
  }
}
