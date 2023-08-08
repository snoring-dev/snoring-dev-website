import React from "react";
import Heading from "@/components/ui/Heading";

const ProgrammingLangages = () => (
  <div className="flex flex-col space-y-4">
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Langages de programmation:</p>
      <p>JAVA, PHP, Ruby et JavaScript (TypeScript & ES)</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Base de données:</p>
      <p>MySQL, Postgres SQL et MongoDB</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Développement Mobile:</p>
      <p>Cordova, React Native & Expo</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Backend:</p>
      <p>PHP Symfony, NodeJS, NestJS, Express, Prisma, TypeORM, Stripe, Strapi.js, GraphQL, TRCP</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Frontend:</p>
      <p>HTML, CSS, Tailwind CSS, React.js, Next.js, Redux-Toolkit, Styled Components, Zod</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Tests:</p>
      <p>Jest, React Testing Library & Cypress</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">Outils de développement:</p>
      <p>Git, Docker & AWS</p>
    </div>
    <div className="flex md:flex-row flex-col">
      <p className="font-semibold pr-2">CI / CD:</p>
      <p>Github Actions, Gitlab</p>
    </div>
  </div>
);

function Skills() {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="compétences" uppercase />
      <ProgrammingLangages />
    </section>
  );
}

export default Skills;
