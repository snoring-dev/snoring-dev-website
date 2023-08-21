import React from "react";
import Container from "../container";
import { Archivo_Narrow } from "next/font/google";
import { cn } from "@/utils";

const font = Archivo_Narrow({ subsets: ["latin"] });

function Faq() {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-24">
        <div className="col-span-12 lg:col-span-5">
          <p className="text-gray-300 uppercase font-light text-sm py-1">faq</p>
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
          <p className="text-sm text-black pt-8 lg:pr-36">
            If you have any other questions, you can contact me by my email:
            <span className="pl-1 text-blue-500">
              med.jemmoudi@gmail.com
            </span>{" "}
            or by filling the dedicated form
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div
            tabIndex={0}
            className="collapse collapse-open collapse-plus bg-[#EDF0F9] mb-4"
          >
            <div className="collapse-title text-xl font-medium text-black">
              Do you do web design or web development?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus corporis natus deleniti eveniet, enim commodi dolorum
                impedit esse dolores tenetur nobis necessitatibus aliquid
                perspiciatis ratione error ut tempora cumque excepturi.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-[#EDF0F9] mb-4"
          >
            <div className="collapse-title text-xl font-medium text-black">
              How long does a website take to build?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus corporis natus deleniti eveniet, enim commodi dolorum
                impedit esse dolores tenetur nobis necessitatibus aliquid
                perspiciatis ratione error ut tempora cumque excepturi.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-[#EDF0F9] mb-4"
          >
            <div className="collapse-title text-xl font-medium text-black">
              Will you work on the project in your account or mine?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus corporis natus deleniti eveniet, enim commodi dolorum
                impedit esse dolores tenetur nobis necessitatibus aliquid
                perspiciatis ratione error ut tempora cumque excepturi.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-[#EDF0F9] mb-4"
          >
            <div className="collapse-title text-xl font-medium text-black">
              {`I'm an agency, what you can do for us?`}
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus corporis natus deleniti eveniet, enim commodi dolorum
                impedit esse dolores tenetur nobis necessitatibus aliquid
                perspiciatis ratione error ut tempora cumque excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Faq;
