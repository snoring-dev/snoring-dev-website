import React from "react";
import Heading from "@/components/ui/Heading";
import { Languages as LanguagesType } from "@/utils/types";

interface Props {
  data: LanguagesType;
  title: string;
}

function Languages({ title, data }: Props) {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title={title} uppercase />
      <div className="flex flex-col space-y-4">
        {data.items.map((item) => (
          <div key={item._key} className="flex justify-between">
            <p className="font-semibold pr-2">{item.key}</p>
            <p className="text-gray-400 italic">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
