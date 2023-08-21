import { Archivo_Narrow } from "next/font/google";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

const font = Archivo_Narrow({ subsets: ["latin"] });

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  anchor: string;
}

const SkillCard = ({ anchor, title, content, className }: CardProps) => (
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
      <p className="text-[#585F6F] font-semibold text-xl">{anchor}</p>
      <p className={cn(font.className, "text-gray-900 font-semibold text-2xl")}>
        {title}
      </p>
      <p className="text-gray-700  text-xs lg:text-sm pt-2 pr-3">{content}</p>
    </div>
  </div>
);

export { SkillCard };
