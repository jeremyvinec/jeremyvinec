import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";

const aboutContent = {
  name: "Jérémy Yvinec",
  avatarImage: "/images/avatar.png",
  content_one:
    `Développeur passionné depuis quelques années,
    ma passion de l'informatique m'a poussé à approfondir  mes connaissances.`,
  content_two:
    `J'ai un faible pour les projets ambitieux et mes technologies de prédilection actuelles sont : 
    mobile (React Native), back-end (NodeJS, MongoDB) et React.js pour le front-end.`,
  content_three:
    `Aujourd'hui je mets ces compétences à votre disposition
    pour accompagner vos projets créatifs web et mobile
    qui nécessitent une maîtrise des technos modernes embarquées sur nos navigateurs.`,
  cv: "/images/cv.png",
};

const counterData = [
  {
    id: 1,
    title: "Projets terminés",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Tasse de café",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Clients satisfaits",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle 
          title="À Propos" 
          description="Les sujets sur lesquels je vais pouvoir vous aider." 
        />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center mt-3">
              <img 
                src={aboutContent.avatarImage} 
                alt={aboutContent.name} 
                className="profil" 
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content_one}</p>
                  <p className="mt-3">{aboutContent.content_two}</p>
                  <p className="mt-3">{aboutContent.content_three}</p>
                  <a href={aboutContent.cv} target="_blanck">
                    <div className="mt-4 btn btn-default">
                      Télécharger mon CV
                    </div>
                  </a>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
