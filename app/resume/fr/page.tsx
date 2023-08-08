import Container from "@/components/container";
import Education from "@/components/resume/education";
import Experiences from "@/components/resume/experiences";

import ResumeHeader from "@/components/resume/header";
import Languages from "@/components/resume/languages";
import ProfileDescription from "@/components/resume/profile-description";
import Skills from "@/components/resume/skills";

function FranchResumePage() {
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

export default FranchResumePage;
