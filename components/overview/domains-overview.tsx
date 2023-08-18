import Image from "next/image";
import { Archivo_Narrow } from "next/font/google";
import Container from "../container";
import EmptySpace from "../ui/empty-space";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

const font = Archivo_Narrow({ subsets: ["latin"] });

const FirstCard = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      className,
      "w-full rounded-xl bg-[#EDF0F9] relative h-[150px] border border-gray-400 overflow-hidden"
    )}
  >
    <div className="bg-[#D9DFF2] mask mask-circle w-[100px] h-[100px] absolute -top-16 -left-16" />
    <div className="bg-[#D9DFF2] mask mask-hexagon-2 w-[120px] h-[120px] absolute -bottom-16 -left-2 opacity-75" />
    <div className="bg-[#D9DFF2] mask mask-squircle w-[190px] h-[190px] absolute -right-24 top-4 rotate-[28deg]" />
    <div className="relative z-10 pt-2 pl-4">
      <p className="text-[#585F6F] font-semibold text-xl">1</p>
      <p className={cn(font.className, "text-gray-900 font-semibold text-2xl")}>
        UI Integration
      </p>
      <p className="text-gray-700 text-sm pt-4">
        I can transform your design from Figma to a real User Interface using
        the latest technologies such as TailwindCSS and ReactJS
      </p>
    </div>
  </div>
);

const SecondCard = () => (
  <div className="w-full rounded-xl bg-[#EDF0F9] relative h-[150px] border border-gray-400 rotate-1"></div>
);

const ThirdCard = () => (
  <div className="w-full rounded-xl bg-[#EDF0F9] relative h-[150px] border border-gray-400 -rotate-1"></div>
);

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
            <FirstCard className="-rotate-1" />
            <FirstCard className="rotate-1" />
            <FirstCard className="-rotate-1" />
          </div>
        </div>
      </div>
      <EmptySpace />
    </Container>
  );
}

export default DomainsOverview;
