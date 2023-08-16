import React from "react";
import { HiBuildingLibrary } from "react-icons/hi2";
import Heading from "../ui/Heading";
import { AcademicPath } from "@/utils/types";
import { toHTML } from "@portabletext/to-html";
import dayjs from "dayjs";

import("dayjs/locale/fr");
import("dayjs/locale/en");

interface Props {
  data: AcademicPath[];
  locale: string;
}

const EducationLine = ({
  data,
  locale = "en",
}: {
  data: AcademicPath;
  locale: string;
}) => {
  dayjs.locale(locale);
  const htmlBody = toHTML(data.body);
  const startDate = dayjs(data.start_date, "YYYY-MM-DD", locale);
  const endDate = Boolean(data.is_present)
    ? null
    : dayjs(data.end_date, "YYYY-MM-DD", locale);
  const present = locale === "fr" ? `Aujourd'hui` : "Present";
  
  return (
    <section id="one-experience" className="mt-10 mb-20">
      <div
        id="exp-header"
        className="flex flex-col lg:flex-row w-full justify-start lg:justify-between"
      >
        <p className="flex text-lg font-semibold">
          <HiBuildingLibrary className="w-6 h-6 mr-2" />
          {`${data.degree_title}, ${data.college_name}`}
        </p>
        <span className="flex flex-col lg:items-end">
          <p className="text-lg font-light capitalize">
            {startDate.format("MMMM YYYY")} -{" "}
            {endDate?.format("MMMM YYYY") ?? present}
          </p>
          <p className="text-sm text-gray-400">{data.location_name}</p>
        </span>
      </div>
      <div
        id="exp-story"
        className="prose w-full max-w-full lg:max-w-5xl my-6"
        dangerouslySetInnerHTML={{
          __html: htmlBody,
        }}
      />
    </section>
  );
};

function Education({ data, locale }: Props) {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="formation" uppercase />
      {data.map((entry, key) => {
        return <EducationLine key={key} data={entry} locale={locale} />;
      })}
    </section>
  );
}

export default Education;
