import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import About from "../components/sections/About";
import BrandlogosDark from "../components/sections/BrandlogosDark";
import Contact from "../components/sections/Contact";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Works from "../components/sections/Works";
import Skills from '../components/sections/Skills'

function HomepageDark() {
  document.body.classList.add("dark");
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <Header
        logoSource="/favicon.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-skills">
          <Skills />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-testimoninal">
          <Testimonials />
        </Element>
        <Element name="section-brandlogos">
          <BrandlogosDark />
        </Element>
        {/*<Element name="section-blogs">
          <Blogs />
          </Element>*/}
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default HomepageDark;
