import { groq } from "next-sanity";
import sanityClient from "@/lib/sanity.client";
import { ResumeResponse } from "./types";

const resumeQuery = groq`
  *[_type == "resume" && lang == $lang] {
    title,
    personal_data -> {
      full_name,
      job_title,
      bio,
      email,
      phone,
      address,
      picture_url,
      links
    },
    "experiences": experiences[] -> {
      position_title,
      company_name,
      location_name,
      start_date,
      end_date,
      is_present,
      "projects": projects[] -> {
        title,
        body,
        technical_stack,
        show_title
      }
    },
    "academic_path": academic_path[] -> {
      degree_title,
      college_name,
      location_name,
      start_date,
      end_date,
      is_present,
      body
    },
    skills -> {
      items
    },
    languages -> {
      items
    },
  }
`;

export const getResume = async (lang: string): Promise<ResumeResponse> => {
  return sanityClient.fetch(resumeQuery, { lang });
};
