import Heading from "../ui/Heading";
import { Lora } from "next/font/google";
import { MdOutlineCorporateFare } from "react-icons/md";

const font = Lora({ subsets: ["latin"] });

const ExpDLP1 = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
        Développeur Frontend - Sénior, DisneyLand Paris
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Mars 2021 - Juin 2023</p>
        <p className="text-sm text-gray-400">{`Val d'Europe, France`}</p>
      </span>
    </div>
    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`Depuis que j'ai rejoint l'entreprise en mars 2019, j'ai travaillé sur divers projets, tous contribuant à la plateforme numérique disneylandparis.com. React.js a été une bibliothèque clé utilisée dans ces projets, sous différentes formes, notamment MPA, SPA et full-stack avec le framework NextJS. En tant que membre de l'équipe numérique, mes responsabilités ont inclus :`}</p>
      <ul>
        <li>{`Intégration des composants UI dans le système de conception Fantasia-DS.`}</li>
        <li>{`Implémentation de diverses US rédigées par les PO.`}</li>
        <li>{`Migration de projets plus anciens vers la nouvelle architecture NextJS, `}</li>
        <li>{`Réalisation de tests unitaires et fonctionnels à l'aide de Jest, Mocha et React Testing Library.`}</li>
        <li>{`Réalisation de tests end-to-end avec Cypress et Cucumber.`}</li>
        <li>{`Travail sur la mise en correspondance des données de l'API GraphQL avec les modules DLP.`}</li>
        <li>{`Assister aux différent points/réunions à propos du nouveau socle de migration vers Next.js`}</li>
        <li>{`Accompagner les équipes de développement dans leur process de migration en tant que référent technique.`}</li>
        <li>{`Participation au process de recrutement des nouveaux développeurs pour renforcer les équipes disney.`}</li>
        <li>{`Code-review, validation et déploiement des développements en cours sur les environnement de tests`}</li>
      </ul>
      <p>{`Dans l'ensemble, mon expérience à Disneyland Paris en tant que développeur front-end a impliqué de travailler sur des projets complexes avec une variété de technologies et d'outils, et de collaborer étroitement avec d'autres membres de l'équipe numérique pour apporter de nouvelles fonctionnalités à la plateforme disneylandparis.com. Mon travail a été crucial pour améliorer l'expérience utilisateur des visiteurs du parc et contribuer au succès de Disneyland Paris.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
          {`React.js, NextJS, NodeJS, TypeScript, Next Auth, GraphQL, Jest, React Testing Library, Cypress, Docker, Git, Figma, Tailwind CSS, Storybook, CSS-In-JS, Styled-components`}
        </p>
      </div>
    </div>
  </section>
);

const ExpDLP2 = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
        Développeur (React.js & Node.js), DisneyLand Paris
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Février 2019 - Février 2021</p>
        <p className="text-sm text-gray-400">{`Val d'Europe, France`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`Participation à la mise en place de la nouvelle plateforme e-commerce de Disneyland Paris. Il s'agit de la rénovation complète de la plateforme de vente en ligne de Disneyland paris, connu sous le nom de Package. La plateforme permet aux utilisateurs de réserver en ligne un séjour complet du transport jusqu'à l'arrivée à l'hôtel.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
          {`TypeScript, React.js, React-Router, Redux, Redux-Saga, Styled Components & Ant Design`}
        </p>
      </div>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`Mise en place d'un système de  mock dynamique pour gérer les problèmes des APIs et débloquer les développement. Il s'agit d'une API Mock, qui se nourrit des données de la prod et intervient lorsque les APIs réelles cessent de répondre.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
          {`TypeScript, Node.js,  Nest.js, Mongoose, TypeORM, Axios Interceptors`}
        </p>
      </div>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`Autre point important:`}</p>
      <ul>
        <li>{`Écritures de tests unitaires (Sinon.js, Mocha, Jest, react-testing-library)`}</li>
        <li>{`Test Ent-to-end avec Cypress`}</li>
        <li>{`Participation aux rituels Agile SAFE.`}</li>
      </ul>
    </div>
  </section>
);

const ExpEutech = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
        Développeur full-stack, Eutech-SSII
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Août 2016 - Janvier 2019</p>
        <p className="text-sm text-gray-400">{`Troyes, France`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <span className="font-semibold text-black">
        Thales (e-Jet mobile app):
      </span>
      <p className="p-0 m-0 mt-2">{`Intervention en tant que développeur Front et Mobile sur la mise en place de Thales e-JET. L'application propose aux collaborateurs du groupe (avec un système de match à la Tinder), de faire un échange de postes similaires pendant six à douze mois.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
          {`ReactJS, MobX, React Router, Axios, Webpack, SASS, PHP (Symfony), MySQL, Apache Cordova, OneSignal (Push notification)`}
        </p>
      </div>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <span className="font-semibold text-black">
        AG2R La Mondiale (Vivons-Velo):
      </span>
      <p className="p-0 m-0 mt-2">{`Participation au développement de l'applications web et mobile Vivons-Vélo, dédiée à la pratique du vélo, avec un programme solidaire pour cumuler des dons en faveur de l'institut PASTEUR.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <ul>
          <li>
            <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
              - {`ReactJS, HTML, CSS/bootstrap, PHP (Symfony)`}
            </p>
          </li>
          <li>
            <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
              - {`Android platform, Retrofit, MVP Architecture`}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <span className="font-semibold text-black">
        CHU Troyes (MyGHT eco-system):
      </span>
      <p className="p-0 m-0 mt-2">{`Participation au développement de l'application CALIPSO. Il s'agit d'une plateforme de service faisant partie de la panoplie d'outils MyGHT. Calipso permet aux infirmiers et aux médecins de faire le suivi des personnes âgées, et de subvenir à leurs besoins.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
          {`React native, Redux, Ducks, Realm, Responsive Layout, React Navigation, React native voice.`}
        </p>
      </div>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <span className="font-semibold text-black">
        HERETIC SAS (Signal-Arnaques.com):
      </span>
      <p className="p-0 m-0 mt-2">{`Développement d'un site web communautaire pour le signalement des arnaques et le partage de mauvaise expériences (arnaques sur Leboncoin, arnaque par téléphone, ...). Le site aujourd’hui est devenu une référence dans ce domaine et propose plusieurs outils pour combattre ce genre de crime notamment une API Rest, une extension Chrome & Firefox, et une IA permettant de savoir si une personne (émail, numéro de téléphone) et intègre ou non.`}</p>
    </div>
    <div id="technical-stuff">
      <div className="badge badge-ghost p-3">Stack Technique:</div>
      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
        <p className={"prose max-w-full lg:max-w-5xl " + font.className}>
          {`PHP, Yii Framework, Bootstrap, jQuery, AJAX`}
        </p>
      </div>
    </div>
  </section>
);

const Exp2WLS = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
        Développeur full-stack, 2WLS
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Octobre 2015 - Avril 2016</p>
        <p className="text-sm text-gray-400">{`Casablanca, Maroc`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`Participation au développement de TOTAL-GAZ Fidélité, un programme qui vise à fidéliser les vendeurs et mettre en avance le produit de la marque TOTAL`}</p>
      <ul>
        <li>{`Assister le client dans la phase de définition de besoins`}</li>
        <li>{`Réalisation de l'applicartion mobile (Android)`}</li>
        <li>{`Développement du backend (PHP / Symfony)`}</li>
        <li>{`Étude et développement des évolutions`}</li>
        <li>{`Accompagnement des clients lors du déploiement`}</li>
      </ul>
    </div>
  </section>
);

const ExpHTConnect = () => (
  <section id="one-experience" className="mt-10 mb-20">
    <div
      id="exp-header"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
    >
      <p className="flex text-lg font-semibold">
        <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
        Développeur Web, HT Connect
      </p>
      <span className="flex flex-col lg:items-end">
        <p className="text-lg font-light">Août 2013 - Novembre 2014</p>
        <p className="text-sm text-gray-400">{`Marrakech, Maroc`}</p>
      </span>
    </div>

    <div id="exp-story" className="prose w-full max-w-full lg:max-w-5xl my-6">
      <p>{`En tant que développeur web, j'ai conçu, développé et maintenu des sites web et des applications, en utilisant des langages et technologies modernes. J'ai résolu des problèmes techniques, collaboré efficacement en équipe et contribué à l'optimisation de la présence en ligne de l'entreprise pour offrir des expériences utilisateur exceptionnelles.`}</p>
      <ul>
        <li>{`Intégration de charte graphique en HTML et CSS.`}</li>
        <li>{`Implémentation des services métier coté backend en PHP.`}</li>
        <li>{`Développements frontend en JQuery et JavaScript.`}</li>
        <li>{`Rédaction des guides utilisateur.`}</li>
      </ul>
    </div>
  </section>
);

function Experiences() {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="Expériences professionnelles" uppercase />
      <ExpDLP1 />
      <ExpDLP2 />
      <ExpEutech />
      <Exp2WLS />
      <ExpHTConnect />
    </section>
  );
}

export default Experiences;
