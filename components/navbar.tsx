"use client"

import { Archivo_Narrow } from "next/font/google";
import { cn } from "@/utils";
import MainNav from "./main-nav";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const font = Archivo_Narrow({ subsets: ["latin"] });

function Navbar() {
  const pathname = usePathname();
  const pageRegex = new RegExp(/^\/resume\//);

  if (pageRegex.test(pathname)) {
    return null;
  }

  return (
    <div className="bg-white border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className={font.className}>
          <span className="font-bold text-2xl">Snoring.dev</span>
        </div>
        <div className="flex">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <button
              className={cn(
                "btn",
                "bg-purple-700 text-white text-[16px] capitalize flex items-center justify-center border border-[#00000000] hover:text-purple-700 hover:bg-white hover:border hover:border-purple-700"
              )}
            >
              Contact
              <FaArrowRight className="font-semibold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
