import Container from "@/components/container";
import DownloadResumeButton from "@/components/download-resume-button";
import Education from "@/components/resume/education";
import Experiences from "@/components/resume/experiences";
import ResumeHeader from "@/components/resume/header";
import Languages from "@/components/resume/languages";
import ProfileDescription from "@/components/resume/profile-description";
import Skills from "@/components/resume/skills";
import labels, { LabelsMap } from "@/utils/labels";
import { getResume } from "@/utils/resume";
import { ResumeResponse } from "@/utils/types";

interface Props {
  params: { lang: string };
}

async function FrenchResumePage({ params }: Props) {
  const resumeData: ResumeResponse = await getResume(params.lang || "fr");
  const resources: LabelsMap = labels.get(params.lang);

  return (
    <Container>
      <div className="fixed bottom-5 right-5">
        <DownloadResumeButton />
      </div>
      <ResumeHeader data={resumeData[0].personal_data} />
      <ProfileDescription
        title={resources.about_me}
        data={resumeData[0].personal_data.bio}
      />
      <Experiences
        title={resources.exp}
        stackLabel={resources.technical_stack}
        locale={params.lang ?? "en"}
        data={resumeData[0].experiences}
      />
      <Education
        title={resources.formation}
        locale={params.lang ?? "en"}
        data={resumeData[0].academic_path}
      />
      <Skills title={resources.skills} data={resumeData[0].skills} />
      <Languages title={resources.lang} data={resumeData[0].languages} />
    </Container>
  );
}

export default FrenchResumePage;
