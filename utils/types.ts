export type ResumeResponse = Resume[];

export interface Resume {
  languages: Languages;
  title: string;
  personal_data: PersonalData;
  experiences: Experience[];
  academic_path: AcademicPath[];
  skills: Skills;
}

export interface Languages {
  items: Item[];
}

export interface Item {
  key: string;
  _type: string;
  _key: string;
  value: string;
}

export interface PersonalData {
  picture_url: string;
  links: Link[];
  full_name: string;
  job_title: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
}

export interface Link {
  value: string;
  _type: string;
  name: string;
  _key: string;
}

export interface Experience {
  company_name: string;
  location_name: string;
  start_date: string;
  end_date: string;
  is_present: boolean;
  projects: Project[];
  position_title: string;
}

export interface Project {
  title: string;
  body: Body[];
  technical_stack?: string[];
  show_title?: boolean;
}

export interface Body {
  style: string;
  _key: string;
  markDefs: any[];
  children: Children[];
  _type: string;
  level?: number;
  listItem?: string;
}

export interface Children {
  marks: any[];
  text: string;
  _key: string;
  _type: string;
}

export interface AcademicPath {
  is_present?: boolean;
  body: Body[];
  degree_title: string;
  college_name: string;
  location_name: string;
  start_date: string;
  end_date: string;
}

export interface Skills {
  items: Item[];
}
