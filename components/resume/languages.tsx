import React from "react";
import Heading from "@/components/ui/Heading";

const HumanLanguages = () => (
  <div className="flex flex-col space-y-4">
    <div className="flex justify-between">
      <p className="font-semibold pr-2">Français</p>
      <p className="text-gray-400 italic">Courant</p>
    </div>
    <div className="flex justify-between">
      <p className="font-semibold pr-2">Anglais</p>
      <p className="text-gray-400 italic">Intermédiaire</p>
    </div>
    <div className="flex justify-between">
      <p className="font-semibold pr-2">Arabe</p>
      <p className="text-gray-400 italic">Langue maternelle</p>
    </div>
  </div>
);

function Languages() {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="Langues" uppercase />
      <HumanLanguages />
    </section>
  );
}

export default Languages;
