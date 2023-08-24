/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "../container";
import { SiLinkedin } from "react-icons/si";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdCloudDownload } from "react-icons/md";
import { Poppins } from "next/font/google";
import { cn } from "@/utils";

const font = Poppins({ subsets: ["latin"], weight: "300" });

function Proposal() {
  return (
    <Container>
      <div className="grid grid-cols-12 px-8 lg:px-0 mt-10 lg:mt-32">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center justify-start gap-4">
            {/* AVATAR */}
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img
                  src="https://res.cloudinary.com/mjemmoudi/image/upload/v1691500564/Screenshot_2023-08-08_at_15.15.57_gf5wva.png"
                  alt="Mohammed-JEMMOUDI"
                />
              </div>
            </div>
            <div>
              <p className="font-light text-2xl lg:text-3xl text-black">{`Let's build it together`}</p>
            </div>
          </div>
          <div className="flex mt-6 gap-2 lg:gap-4">
            <Link
              href="https://www.linkedin.com/in/jemmoudi/"
              className="flex items-center gap-2 bg-black text-white px-3 py-3 lg:px-6 lg:py-4 rounded-lg hover:shadow-lg transition duration-300"
            >
              <span className="text-sm whitespace-nowrap">My LinkedIn</span>
              <SiLinkedin className="text-white w-5 h-5" />
            </Link>
            <Link
              href="https://res.cloudinary.com/mjemmoudi/image/upload/v1692604660/personal/FR__Mohammed_Jemmoudi_-_Sr_Frontend.pdf"
              className="flex items-center gap-2 bg-black text-white px-3 py-3 lg:px-6 lg:py-4 rounded-lg hover:shadow-lg transition duration-300"
            >
              <span className="text-sm whitespace-nowrap">
                Download my resume
              </span>
              <MdCloudDownload className="text-white w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 relative mt-6 lg:mt-0">
          <div className="bg-[#583FBC] w-full h-full rounded-3xl absolute -z-10 opacity-20 rotate-2" />
          <div className="bg-[#583FBC] w-full min-h-16 rounded-3xl flex flex-col lg:flex-row items-center justify-between px-8 pb-8 lg:pb-0">
            <div
              className={cn(
                font.className,
                "py-8 lg:py-16 text-center lg:text-left"
              )}
            >
              <p className="text-white text-3xl">Try me out, risk free!</p>
              <p className="text-sm text-white font-light">{`Let's build something great together`}</p>
            </div>
            <button className="bg-[#7DE0EA55] hover:bg-transparent border border-transparent hover:border-white transition duration-300 text-white px-6 py-3 rounded-md flex items-center gap-3">
              <span>Contact</span>
              <BsArrowRightCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Proposal;
