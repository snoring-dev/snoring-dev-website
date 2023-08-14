import Link from "next/link";
import { TbPhoneCall, TbMail, TbHome } from "react-icons/tb";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import Avatar from "@/components/avatar";

function ResumeHeader() {
  return (
    <div className="pt-10 w-full flex flex-col-reverse items-center lg:flex-row lg:items-start">
      <div className="lg:w-1/3">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-black">
            Mohammed Jemmoudi
          </h1>
          <h2 className="text-lg text-gray-700">
            Développeur Frontend (React.js / Next.js)
          </h2>
        </div>
        <div className="mt-4 flex flex-col text-sm text-gray-400 space-y-2">
          <p className="flex flex-row space-x-2">
            <TbMail className="w-4 h-4" />
            <span>med.jemmoudi@gmail.com</span>
          </p>
          <p className="flex flex-row space-x-2">
            <TbPhoneCall className="w-4 h-4" />
            <span>+33 (0) 629 654 835</span>
          </p>
          <p className="flex flex-row space-x-2">
            <TbHome className="w-4 h-4" />
            <span>Saint-Thibault-Des-Vignes, France</span>
          </p>
        </div>
      </div>
      <div className="lg:w-2/3 flex items-end justify-end border-b mb-4 lg:border-none lg:mb-0">
        <div className="w-36 flex flex-col items-end justify-center py-2">
          <Avatar
            source="https://res.cloudinary.com/mjemmoudi/image/upload/v1691500564/Screenshot_2023-08-08_at_15.15.57_gf5wva.png"
            alt="mohammed-jemmoudi-frontend-developper"
          />
          <div className="pb-4 lg:pb-0 m-auto flex flex-row items-center space-x-3 justify-center mt-3">
            <Link target="_blank" href="https://www.linkedin.com/in/jemmoudi/">
              <SiLinkedin className="w-6 h-6 text-gray-400 hover:text-black transition-colors duration-300" />
            </Link>
            <Link target="_blank" href="https://github.com/snoring-dev/">
              <SiGithub className="w-6 h-6 text-gray-400 hover:text-black transition-colors duration-300" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/jemmoudi.md/">
              <SiInstagram className="w-6 h-6 text-gray-400 hover:text-black transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
