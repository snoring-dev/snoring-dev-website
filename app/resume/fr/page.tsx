import Container from "@/components/container";
import Education from "@/components/resume/education";
import Experiences from "@/components/resume/experiences";

import ResumeHeader from "@/components/resume/header";
import ProfileDescription from "@/components/resume/profile-description";

function FranchResumePage() {
  return (
    <Container>
      <ResumeHeader />
      <ProfileDescription />
      <Experiences />
      <Education />
    </Container>
  );
}

export default FranchResumePage;
