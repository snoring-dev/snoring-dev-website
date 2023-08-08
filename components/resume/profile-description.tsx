import React from "react";
import Heading from "../ui/Heading";

function ProfileDescription() {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="Profile" uppercase />
      <div className={"flex flex-col space-y-2 prose max-w-full"}>
        <p>
          {`Ingénieur logiciel expérimenté avec une passion pour la programmation et une solide expérience en développement full-stack. Actuellement, je me démarque en tant qu'ingénieur front-end spécialisé dans React.js et Next.js. Ces frameworks m'ont permis de créer des interfaces utilisateur attrayantes et des applications web robustes de manière efficace. Je suis fier de mes compétences exceptionnelles en communication, qui ont constamment reçu des retours positifs de la part des clients. En m'engageant activement auprès des parties prenantes et en comprenant leurs besoins, je m'assure de fournir des solutions de haute qualité qui répondent à leurs attentes.`}
        </p>
        <p>
          {`Motivé par les défis, je m'efforce d'être productif et efficace dans tous mes projets. Mon désir de rester à l'avant-garde des tendances de l'industrie et mon dévouement à l'apprentissage continu m'ont aidé à maintenir un solide ensemble de compétences et à fournir des résultats exceptionnels.`}
        </p>
      </div>
    </section>
  );
}

export default ProfileDescription;
