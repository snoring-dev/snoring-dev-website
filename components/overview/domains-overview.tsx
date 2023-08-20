import Image from "next/image";
import Container from "../container";
import EmptySpace from "../ui/empty-space";
import { SkillCard } from "../ui/skill-card";

function DomainsOverview() {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center mt-10">
        <div className="w-1/2 h-[500px]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              alt="all-skills"
              src="https://res.cloudinary.com/mjemmoudi/image/upload/v1692370549/personal/all_skills.svg"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
        <div className="w-1/2 h-[500px] pt-4">
          <div className="w-full font-semibold text-3xl text-black">
            I specialize in
          </div>
          <div className="flex w-full flex-col gap-8 mt-6">
            <SkillCard
              anchor="1"
              title="UI Integration"
              content="I can transform your design from Figma to a real User Interface using the latest technologies such as TailwindCSS and ReactJS"
              className="-rotate-1"
            />
            <SkillCard
              anchor="2"
              title="Software Design"
              content="Embracing the Design-Code Synergy, I'm able to translate intricate design blueprints into functional code architecture, resulting in software that's as elegant under the hood as it is on the surface."
              className="rotate-1"
            />
            <SkillCard
              anchor="3"
              title="Performance & Optimization"
              content="I'm dedicated to squeezing every ounce of efficiency and speed out of the codebase, ensuring that websites and applications not only meet but exceed performance expectations."
              className="-rotate-1"
            />
          </div>
        </div>
      </div>
      <EmptySpace />
    </Container>
  );
}

export default DomainsOverview;
