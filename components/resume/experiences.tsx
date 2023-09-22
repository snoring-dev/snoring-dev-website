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
