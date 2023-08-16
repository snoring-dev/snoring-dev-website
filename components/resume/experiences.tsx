import Heading from "../ui/Heading";
import { Lora } from "next/font/google";
import { MdOutlineCorporateFare } from "react-icons/md";
import { toHTML } from "@portabletext/to-html";
import dayjs from "dayjs";
import { Body, Experience as ExperienceType } from "@/utils/types";

import("dayjs/locale/fr");
import("dayjs/locale/en");

interface Props {
  data: ExperienceType[];
  locale: string;
}

const font = Lora({ subsets: ["latin"] });

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

function Experiences({ data, locale }: Props) {
  dayjs.locale(locale);
  const present = locale === "fr" ? `Aujourd'hui` : "Present";
  const htmlBody = (body: Body[]) => toHTML(body);
  const formatDate = (_date: string) => {
    const dateObj = dayjs(_date, "YYYY-MM-DD");
    return dateObj.format("MMMM YYYY");
  };

  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="Expériences professionnelles" uppercase />

      {data.map((exp, k) => {
        return (
          <section key={k} className="mt-10 mb-20">
            <div
              id="exp-header"
              className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
            >
              <p className="flex text-lg font-semibold">
                <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
                {exp.position_title}, {exp.company_name}
              </p>
              <span className="flex flex-col lg:items-end">
                <p className="text-lg font-light capitalize">
                  {formatDate(exp.start_date)} -{" "}
                  {Boolean(exp.is_present) ? present : formatDate(exp.end_date)}
                </p>
                <p className="text-sm text-gray-400">{exp.location_name}</p>
              </span>
            </div>
            {exp.projects.map((project, i) => (
              <>
                <div
                  id="exp-story"
                  className="prose w-full max-w-full lg:max-w-5xl my-6"
                >
                  {project.show_title && (
                    <span className="font-semibold text-black">
                      {project.title}:
                    </span>
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: htmlBody(project.body) }}
                  />
                </div>
                {project.technical_stack &&
                  project.technical_stack?.length > 0 && (
                    <div id="technical-stuff">
                      <div className="badge badge-ghost p-3">
                        Stack Technique:
                      </div>
                      <div className="border-t border-gray-200 w-full my-2 py-2 px-6">
                        {project.technical_stack?.map((stackLine, index) => (
                          <p
                            key={index}
                            className={
                              "prose max-w-full lg:max-w-5xl " + font.className
                            }
                          >
                            {stackLine}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
              </>
            ))}
          </section>
        );
      })}
    </section>
  );
}

export default Experiences;
