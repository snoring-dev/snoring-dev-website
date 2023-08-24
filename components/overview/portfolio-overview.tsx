/* eslint-disable @next/next/no-img-element */
import Container from "../container";
import ProjectCard from "./project-card";

function PortfolioOverview() {
  return (
    <div className="bg-[#F6F7FC] w-full pb-24">
      <Container>
        <div className="flex items-center justify-center">
          <p className="font-semibold text-3xl border-b border-gray-200 text-black px-10 pb-2 mt-8">
            Portfolio
          </p>
        </div>
        <div className="grid gap-6 lg:grid-flow-row lg:grid-cols-12 mt-8 lg:mt-16">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </div>
  );
}

export default PortfolioOverview;
