import React from "react";
import Heading from "@/components/ui/Heading";
import { Skills as SkillsType } from "@/utils/types";

interface Props {
  data: SkillsType;
}

function Skills({ data }: Props) {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="compétences" uppercase />
      <div className="flex flex-col space-y-4">
        {data.items.map((item) => (
          <div key={item._key} className="flex md:flex-row flex-col">
            <p className="font-semibold pr-2">{item.key}:</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
