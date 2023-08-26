import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { SiNodedotjs, SiReact } from "react-icons/si";

function PortfolioCard() {
  return (
    <div className="flex flex-col overflow-hidden w-full h-max-[500px] bg-white border border-gray-200 rounded-xl pb-4">
      <div className="relative overflow-hidden w-full aspect-square max-h-[40%]">
        <Image
          fill
          src="https://res.cloudinary.com/mjemmoudi/image/upload/v1689079406/cld-sample-4.jpg"
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center justify-center">
          <span className="text-blue-600 text-base font-semibold">
            Business
          </span>
          <span className="text-gray-400/70 text-xs pl-2 pt-1">
            29th May 2023
          </span>
        </div>
        <div className="flex flex-row gap-2 bg-blue-100/60 rounded-xl p-2 text-blue-400">
          <SiReact className="w-6 h-6" />
          <SiNodedotjs className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col px-4">
        <p className="font-bold text-xl">Building an eCommerce App</p>
        <p className="text-sm text-gray-400 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum
          velit ipsam illum sapiente facere quod saepe, fugiat eos. Optio dolor
          qui velit amet quas quasi voluptatum nam ad pariatur?
        </p>
        <Link href="#" className="group flex flex-row items-center justify-start gap-2 font-semibold mt-4 text-blue-500">
          <span>Read More</span>
          <BsArrowRight className="relative group-hover:translate-x-2 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCard;
