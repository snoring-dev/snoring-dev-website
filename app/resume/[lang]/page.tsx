import Container from "@/components/container";
import Education from "@/components/resume/education";
import Experiences from "@/components/resume/experiences";
import ResumeHeader from "@/components/resume/header";
import Languages from "@/components/resume/languages";
import ProfileDescription from "@/components/resume/profile-description";
import Skills from "@/components/resume/skills";
import { getResume } from "@/utils/resume";
import { ResumeResponse } from "@/utils/types";

interface Props {
  params: { lang: string };
}

async function FrenchResumePage({ params }: Props) {
  const resumeData: ResumeResponse = await getResume(params.lang || "fr");

  return (
    <Container>
      <ResumeHeader data={resumeData[0].personal_data} />
      <ProfileDescription data={resumeData[0].personal_data.bio} />
      <Experiences
        locale={params.lang ?? "en"}
        data={resumeData[0].experiences}
      />
      <Education
        locale={params.lang ?? "en"}
        data={resumeData[0].academic_path}
      />
      <Skills data={resumeData[0].skills} />
      <Languages data={resumeData[0].languages} />
    </Container>
  );
}

export default FrenchResumePage;
