import React from "react";
import Pagetitle from "../elements/Pagetitle";

function Contact() {

  // faEnvelope
  // faCalendar
  // faShareSquare
  return (
    <section id="contact">
      <div className="container">
        <Pagetitle 
          title="Contact" 
          description="Et si on travaillait ensemble ?"
        />
        <div className="text-center">
          <div>
            <p>
              <i className="fas fa-envelope mr-2"></i>
              <strong>Ecrivez-moi</strong>
            </p>
            <a className="email" href="mailto:jeremy.yvinec@gmail.com" title="Cliquer sur ce lien est une bonne idée.">
                jeremy.yvinec@gmail.com
            </a>
          </div>
            <br/>
          <div>
            <i className="fas fa-calendar mr-2"></i>
            <strong>Disponibilités</strong>
            <p>sur demande</p>
          </div>
            <br/>
          <div>
            <i className="fas fa-share-square mr-2"></i>
            <strong>Je raconte ma vie par ici</strong>
            <br/>
            <ul className="social-icons light list-inline mb-0 mt-4">
              <li className="list-inline-item">
                <a 
                  href="https://www.facebook.com/jeremy.yvinec" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="https://www.instagram.com/jeremyvinec/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="https://twitter.com/Jeremyvinec" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="https://www.linkedin.com/in/jeremyvinec/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="https://github.com/jeremyvinec" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
