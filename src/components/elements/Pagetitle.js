import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Pagetitle({ title, description }) {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >
        <div className="section-header">
          <h3 >{title}</h3>
          <p>{description}</p>   
        </div>
      </ScrollAnimation>
      <div className="spacer" data-height="60"></div>
    </>
  );
}

export default Pagetitle;
