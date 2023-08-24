import React from "react";
import Container from "../container";
import { Archivo_Narrow } from "next/font/google";
import { cn } from "@/utils";
import FaqEntry from "./faq-entry";

const font = Archivo_Narrow({ subsets: ["latin"] });

function Faq() {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 lg:mt-24">
        <div className="col-span-12 lg:col-span-5">
          <div className="px-8 lg:px-0 lg:pb-4">
            <p className="text-gray-300 uppercase font-light text-sm py-1">
              faq
            </p>
            <p
              className={cn(
                font.className,
                "text-black font-semibold text-6xl capitalize"
              )}
            >
              frequently asked
            </p>
            <p
              className={cn(
                font.className,
                "text-cyan-400 font-semibold text-6xl capitalize"
              )}
            >
              questions
            </p>
          </div>
          <p className="text-sm text-black px-8 py-4 lg:py-0 lg:px-0 lg:pr-36">
            If you have any other questions, you can contact me by my email:
            <span className="pl-1 text-blue-500">
              med.jemmoudi@gmail.com
            </span>{" "}
            or by filling the dedicated form
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 px-8 py-6 lg:px-0 lg:py-0">
          <FaqEntry />
          <FaqEntry />
          <FaqEntry />
          <FaqEntry />
        </div>
      </div>
    </Container>
  );
}

export default Faq;
