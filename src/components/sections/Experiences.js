import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "IUT Aix-Marseille site de Gap",
    years: "2018 - 2019",
    content:
      "Licence Professionnelle Métiers de l’informatique & applications Web, Parcours Mobilité, Internet et Web (MIW)",
  },
  {
    id: 2,
    title: "Université de Bretagne Occidentale",
    years: "2016 - 2018",
    content:
      "DEUST Technicien des Médias Intéractifs et Communiquants,  programmation informatique, applications spécifiques.",
  },
  {
    id: 3,
    title: "La Croix Rouge La Salle Brest",
    years: "2013 - 2016",
    content:
      "Bac Professionnel Système  Électronique et Numérique (SEN)",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Développement d'une application en React Native",
    years: "2020 - Present",
    content:
      `Développement d'une application en react native pour l'entreprise bloom-code.
      il s'agit d'un un annuaire des EHPAD.`,
  },
  {
    id: 2,
    title: "Développement d'une application web / mobile & application en ReactJS / React Native",
    years: "2019 - 2020",
    content:
      `Application web à destination des coachs sportifs, 
      des préparateurs physiques et des salles de remise en forme.
      5 fonctions essentielles: le testing et l'évaluation,
      la conception de séances, la planification et la gestion du carnet d'entraînement,
      la messagerie instantanée et enfin le monitoring et l'analyse.`,
  },
  {
    id: 3,
    title: "Développeur Front-End",
    years: "2019",
    content:
      `Développement d’une application mobile à destination du monitoring en milieu critique (industrie pharmaceutique).
      Cette solution permet de contrôler et tracer tous les paramètres critiques dans les
      environnements les plus variés : des salles blanches aux chambres froides et
      enceintes climatiques jusqu’aux chaînes de production et magasins de stockage.`,
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
