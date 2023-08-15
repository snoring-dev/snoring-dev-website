import { groq } from "next-sanity";
import sanityClient from "@/lib/sanity.client";

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
    "experiences": *[_type=='experience'] {
      position_title,
      company_name,
      location_name,
      start_date,
      end_date,
      is_present,
      body,
      technical_stack
    },
    "academic_path": *[_type=='academicPath'] {
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

export const getResume = async (lang: string) => {
  return sanityClient.fetch(resumeQuery, { lang });
};
