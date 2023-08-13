/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

export default function Home() {
  return (
    <div className="mt-24 w-full flex items-center justify-center">
      <div className="w-full hero bg-transparent">
        <div className="w-full hero-content flex flex-col lg:flex-row-reverse justify-between">
          <img
            src="https://res.cloudinary.com/mjemmoudi/image/upload/v1691423058/personal/IMG_4035.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:min-w-[50%]">
            <div className="flex flex-col gap-y-6 text-5xl text-black font-extralight">
              <p>
                Hey! <strong className="font-bold">{`I'm Mohammed,`}</strong>
              </p>
              <p>
                {`and I'm a`} <strong className="font-bold">Frontend</strong>{" "}
                Developer
              </p>
              <div className="text-5xl flex flex-row text-black gap-8 mt-2">
                <span className="tooltip" data-tip="NodeJS">
                  <SiNodedotjs className="w-12 h-12" />
                </span>
                <span className="tooltip" data-tip="ReactJS">
                  <SiReact className="w-12 h-12" />
                </span>
                <span className="tooltip" data-tip="NextJS">
                  <SiNextdotjs className="w-12 h-12" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
