"use client";

import { Archivo_Narrow } from "next/font/google";
import MainNav from "./main-nav";
import { TfiMenu } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { TbMessage2Share } from "react-icons/tb";
import MobileNav from "./mobile-nav";
import Container from "./container";

const font = Archivo_Narrow({ subsets: ["latin"] });

function Navbar() {
  const pathname = usePathname();
  const pageRegex = new RegExp(/^\/resume\//);

  if (pageRegex.test(pathname)) {
    return null;
  }

  return (
    <div className="bg-white border-b">
      <Container>
        <div className="flex h-16 items-center px-4 justify-between">
          <div className={font.className}>
            <span className="font-bold text-2xl">Snoring.dev</span>
          </div>
          <div className="flex">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-2 lg:space-x-4">
              <button
                className="
                flex 
                items-center 
                justify-between
                bg-purple-600 
                hover:bg-white 
                border 
                border-transparent 
                transition-colors 
                duration-300 
                hover:border-purple-600 
                text-white 
                hover:text-purple-600 
                py-2 
                px-2 lg:px-4 
                rounded-lg
              "
              >
                <span className="hidden lg:inline uppercase font-semibold text-sm">
                  Contact
                </span>
                <TbMessage2Share className="lg:hidden w-6 h-6" />
              </button>
              <div className="drawer z-10 h-full lg:hidden">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="
                    flex 
                    items-center 
                    justify-between
                    bg-purple-600 
                    hover:bg-white 
                    border 
                    border-transparent 
                    transition-colors 
                    duration-300 
                    hover:border-purple-600 
                    text-white 
                    hover:text-purple-600 
                    py-2 
                    px-2 lg:px-4 
                    rounded-lg
                  "
                  >
                    <TfiMenu className="w-6 h-6" />
                  </label>
                </div>
                <div className="drawer-side bottom-0 h-full">
                  <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <div className="menu p-4 w-80 h-full bg-white text-base-content">
                    <MobileNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
