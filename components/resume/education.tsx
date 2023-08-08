import React from "react";
import { HiBuildingLibrary } from "react-icons/hi2";
import Heading from "../ui/Heading";

const EducationLine = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <HiBuildingLibrary className="w-6 h-6 mr-2" />
        {`Ingénieur d'Etat en Génie logiciel et Systèmes informatique, ENSET Mohammedia`}
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Octobre 2012 - Juillet 2015</p>
        <p className="text-sm text-gray-400">{`Université Hassan II, Maroc`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`La filière de Génie logiciel et systèmes informatiques au sein de l'ENSET Mohammedia se concentre sur l'étude approfondie et le développement de compétences liées à la conception, au développement, à la gestion et à l'optimisation de logiciels et de systèmes informatiques. Cette filière vise à former des ingénieurs spécialisés dans la création de logiciels et la conception de systèmes informatiques robustes, efficaces et innovants.`}</p>
      <p>Voici quelques éléments clés de cette formation:</p>
      <ul>
        <li>
          <strong>Langages de Programmation: </strong>
          {`Maîtrise des langages de programmation (C, C++ et JAVA) et de leurs meilleures pratiques pour le développement logiciel.`}
        </li>
        <li>
          <strong>Algorithmes et Structures de Données: </strong>
          {`Compréhension des algorithmes et structures de données pour résoudre efficacement les problèmes et optimiser les performances.`}
        </li>
        <li>
          <strong>Conception Logicielle: </strong>
          {`Apprentissage des principes de conception, des motifs de conception et des architectures pour créer des logiciels évolutifs et modulaires.`}
        </li>
        <li>
          <strong>Cycle de Développement Logiciel: </strong>
          {`Connaissance des phases du développement logiciel, de l'analyse des besoins à la maintenance.`}
        </li>
        <li>
          <strong>Sécurité Logicielle: </strong>
          {`Compréhension des vulnérabilités de sécurité, de l'authentification, de l'autorisation et des meilleures pratiques pour sécuriser les applications.`}
        </li>
      </ul>
    </div>
  </section>
);

const EducationLine2 = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <HiBuildingLibrary className="w-6 h-6 mr-2" />
        {`DUT en Génie informatique et Réseaux, EST Safi`}
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Octobre 2010 - Juillet 2012</p>
        <p className="text-sm text-gray-400">{`Université Cadi AYYAD, Maroc`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`Le Diplôme Universitaire de Technologie (DUT) en Génie Informatique et Réseaux est une formation de niveau universitaire de deux ans axée sur les domaines de l'informatique, des réseaux informatiques et des technologies de l'information. Cette formation prépare les étudiants à devenir des techniciens supérieurs compétents dans la conception, la gestion et la maintenance de systèmes informatiques et de réseaux.`}</p>
      <p>Voici quelques éléments clés de cette formation:</p>
      <ul>
        <li>
          <strong>Fondements en Informatique: </strong>
          {`Compréhension approfondie des concepts fondamentaux de l'informatique, y compris la programmation, les algorithmes, les structures de données et les bases de données.`}
        </li>
        <li>
          <strong>Réseaux Informatiques: </strong>
          {`Apprendre les principes des réseaux informatiques, y compris la configuration, la gestion et la maintenance des réseaux locaux (LAN) et étendus (WAN), ainsi que les protocoles de communication.`}
        </li>
        <li>
          <strong>Administration de Systèmes: </strong>
          {`Acquérir des compétences en administration de systèmes, notamment la configuration et la maintenance de serveurs, la gestion des utilisateurs et des permissions, et la surveillance des performances.`}
        </li>
        <li>
          <strong>Développement Web: </strong>
          {`Les concepts de développement web sont abordés, y compris la création de sites web, la programmation côté client et côté serveur, ainsi que l'utilisation de langages et de technologies web.`}
        </li>
        <li>
          <strong>Communication et Compétences Sociales: </strong>
          {`Acquérir des compétences de communication et à la collaboration en équipe, car ces compétences sont essentielles dans le monde professionnel.`}
        </li>
      </ul>
    </div>
  </section>
);

const EducationLine3 = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <HiBuildingLibrary className="w-6 h-6 mr-2" />
        {`Baccalauréat scientifique (physique-chimie)`}
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Juillet 2010</p>
        <p className="text-sm text-gray-400">{`Lycée Hassan II, Maroc`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`L'obtention du diplôme de fin d'études secondaires, le baccalauréat, au sein du prestigieux lycée Hassan 2 à Safi, constitue une étape remarquable dans mon parcours éducatif. Cette réussite reflète non seulement mes efforts et mon dévouement envers mes études, mais également l'excellence de l'enseignement dispensé par l'établissement.`}</p>
    </div>
  </section>
);

function Education() {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="formation" uppercase />
      <EducationLine />
      <EducationLine2 />
      <EducationLine3 />
    </section>
  );
}

export default Education;
