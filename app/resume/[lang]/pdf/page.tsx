import { Poppins, Tinos } from "next/font/google";
import dayjs from "dayjs";
import { getResume } from "@/utils/resume";
import { AcademicPath, Body, Experience, ResumeResponse } from "@/utils/types";
import "../../../page.css";
import { cn } from "@/utils";
import { MdOutlineCorporateFare } from "react-icons/md";
import { toHTML } from "@portabletext/to-html";

import("dayjs/locale/fr");
import("dayjs/locale/en");

const poppins_light = Poppins({ subsets: ["latin"], weight: "200" });
const poppins_medium = Poppins({ subsets: ["latin"], weight: "400" });
const poppins_bold = Poppins({ subsets: ["latin"], weight: "700" });
const tinos_medium = Tinos({ subsets: ["latin"], weight: "400" });
const tinos_bold = Tinos({ subsets: ["latin"], weight: "700" });

const fonts = {
  poppins: {
    light: poppins_light.className,
    medium: poppins_medium.className,
    bold: poppins_bold.className,
  },
  tinos: {
    medium: tinos_medium,
    bold: tinos_bold,
  },
};

interface Props {
  params: { lang: string };
}

async function PdfPage({ params }: Props) {
  const resumeData: ResumeResponse = await getResume(params.lang || "fr");
  dayjs.locale(params.lang);
  const present = params.lang === "fr" ? `Aujourd'hui` : "Present";
  const htmlBody = (body: Body[]) => toHTML(body);
  const formatDate = (_date: string) => {
    const dateObj = dayjs(_date, "YYYY-MM-DD");
    return dateObj.format("MMMM YYYY");
  };

  const pageHeader = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className={cn(fonts.tinos.bold, "text-2xl font-semibold")}>
          {resumeData.at(1)?.personal_data.full_name}
        </p>
        <p className={cn(fonts.poppins.medium, "text-base py-1")}>
          {resumeData.at(1)?.personal_data.job_title}
        </p>
        <div
          className={cn(
            fonts.poppins.light,
            "flex flex-row divide-x divide-solid divide-gray-500 items-center justify-center text-xs text-gray-500 py-2"
          )}
        >
          <p className="pr-2">{resumeData.at(1)?.personal_data.email}</p>
          <p className="pl-2 pr-2">{resumeData.at(1)?.personal_data.phone}</p>
          <p className="pl-2">{resumeData.at(1)?.personal_data.address}</p>
        </div>
      </div>
    );
  };

  const sectionTitle = (title: string, titleWidth = "w-1/5") => {
    return (
      <div className="flex flex-row justify-start items-center">
        <p
          className={cn(
            fonts.tinos.medium,
            "font-bold my-2 text-2xl " + titleWidth
          )}
        >
          {title}
        </p>
        <div className="w-full bg-black h-2 relative top-1" />
      </div>
    );
  };

  const profileBio = (
    <div className="flex flex-col">
      {sectionTitle("A propos")}

      <span className={cn("text-sm font-light")}>
        {resumeData
          .at(1)
          ?.personal_data.bio.split("\n")
          .map((chunk, index) => (
            <p className="pt-1 text-justify" key={index}>
              {chunk}
            </p>
          ))}
      </span>
    </div>
  );

  const showExp = (data: Experience[]) => {
    return (
      <>
        {data.map((exp, k) => {
          return (
            <section key={k} className="mt-4 mb-4">
              <div
                id="exp-header"
                className="flex flex-row w-full justify-between"
              >
                <p className="flex text-lg font-semibold">
                  <MdOutlineCorporateFare className="w-6 h-6 mr-2" />
                  {exp.position_title}, {exp.company_name}
                </p>
                <span className="flex flex-col items-end">
                  <p className="text-sm font-light capitalize whitespace-nowrap">
                    {formatDate(exp.start_date)} -{" "}
                    {Boolean(exp.is_present)
                      ? present
                      : formatDate(exp.end_date)}
                  </p>
                  <p className="text-xs text-gray-400">{exp.location_name}</p>
                </span>
              </div>
              {exp.projects.map((project, i) => (
                <>
                  <div
                    key={i}
                    id="exp-story"
                    className="prose w-full max-w-full lg:max-w-5xl my-6"
                  >
                    {project.show_title && (
                      <span className="font-semibold text-black">
                        {project.title}:
                      </span>
                    )}
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: htmlBody(project.body),
                      }}
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
                              className={"prose max-w-5xl text-sm"}
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
      </>
    );
  };

  const showAcademix = (data: AcademicPath[]) => {
    return (
      <div className="flex flex-col">
        {sectionTitle("Formation")}

        {data.map((entry, key) => {
          const startDate = dayjs(entry.start_date, "YYYY-MM-DD", params.lang);
          const endDate = Boolean(entry.is_present)
            ? null
            : dayjs(entry.end_date, "YYYY-MM-DD", params.lang);
          const present = params.lang === "fr" ? `Aujourd'hui` : "Present";

          return (
            <section
              key={key}
              id="exp-header"
              className="flex flex-col w-full mb-2"
            >
              <p className="flex text-lg font-semibold">
                {`${entry.degree_title}, ${entry.college_name}`}
              </p>
              <span className={cn(fonts.poppins.light, "flex items-center text-sm")}>
                <p className="capitalize">
                  {startDate.format("MMMM YYYY")} -{" "}
                  {endDate?.format("MMMM YYYY") ?? present}
                </p>
                <p className="pl-8 relative before:w-4 before:bg-gray-400 before:h-[1px] before:block before:absolute before:top-[10px] before:left-2">{entry.location_name}</p>
              </span>
            </section>
          );
        })}
      </div>
    );
  };

  return (
    <div className="page">
      {pageHeader()}
      {profileBio}
      <div className="flex flex-col mt-4">
        {sectionTitle("Expériences", "w-1/4 mr-2")}
        {showExp(resumeData.at(1)?.experiences ?? [])}
        {showAcademix(resumeData.at(1)?.academic_path ?? [])}
      </div>
    </div>
  );
}

export default PdfPage;
