import Container from "@/components/container";
import Education from "@/components/resume/education";
import Experiences from "@/components/resume/experiences";
import ResumeHeader from "@/components/resume/header";
import Languages from "@/components/resume/languages";
import ProfileDescription from "@/components/resume/profile-description";
import Skills from "@/components/resume/skills";
import { getResume } from "@/utils/resume";

interface Props {
  params: { lang: string };
}

async function FrenchResumePage({ params }: Props) {
  const resumeData = await getResume(params.lang || 'fr');
  console.log(resumeData);
  return (
    <Container>
      <ResumeHeader />
      <ProfileDescription />
      <Experiences />
      <Education />
      <Skills />
      <Languages />
    </Container>
  );
}

export default FrenchResumePage;
