/* eslint-disable @next/next/no-img-element */
import { SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

function MainHero() {
  return (
    <div className="md:mt-24 w-full flex items-center justify-center">
      <div className="w-full hero bg-transparent">
        <div className="w-full hero-content flex flex-col lg:flex-row-reverse justify-between">
          <div className="relative">
            <div className="hidden md:block w-[40px] h-[40px] bg-blue-600 absolute mask mask-hexagon-2 top-5 -left-14 opacity-70" />
            <div className="hidden md:block w-[30px] h-[30px] bg-indigo-400 absolute mask mask-hexagon-2 top-16 -left-10 opacity-50" />
            <div className="hidden md:block w-[300px] h-[300px] bg-indigo-700 absolute bottom-4 -right-16 -z-20 mask mask-circle opacity-10" />
            <div className="hidden md:block w-[300px] h-[300px] bg-indigo-700 absolute -bottom-16 -right-24 -z-20 mask mask-circle opacity-5" />
            <img
              src="https://res.cloudinary.com/mjemmoudi/image/upload/v1692597799/personal/IMG_6616.jpg"
              className="lg:max-w-sm rounded-lg shadow-md mb-6 lg:mb-0 relative z-10"
              alt=""
            />
          </div>

          <div className="lg:min-w-[50%]">
            <div className="flex flex-col-reverse lg:flex-col items-center text-center lg:items-start lg:text-left gap-y-6 text-5xl text-black font-extralight">
              <div>
                <p className="py-8 lg:py-4">
                  Hey! <strong className="font-bold">{`I'm Mohammed,`}</strong>
                </p>
                <p>
                  {`and I'm a`} <strong className="font-bold">Fullstack</strong>{" "}
                  Developer
                </p>
              </div>
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

export default MainHero;
