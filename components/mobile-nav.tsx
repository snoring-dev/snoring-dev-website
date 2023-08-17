"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-y-2">
      <Link
        href="/"
        className={cn(
          "btn btn-ghost text-sm justify-start font-medium transition-colors hover:text-purple-700",
          pathname === "/"
            ? "text-black dark:text-white"
            : "text-muted-foreground"
        )}
      >
        Overview
      </Link>
      <Link
        href="/portfolio"
        className={cn(
          "btn btn-ghost text-sm justify-start font-medium transition-colors hover:text-purple-700",
          pathname === "/portfolio"
            ? "text-black dark:text-white"
            : "text-muted-foreground"
        )}
      >
        Portfolio
      </Link>
      <Link
        href="/resume/fr"
        className={cn(
          "btn btn-ghost text-sm justify-start font-medium transition-colors hover:text-purple-700",
          pathname === "/resume/fr"
            ? "text-black dark:text-white"
            : "text-muted-foreground"
        )}
      >
        CV en français
        <ReactCountryFlag
          countryCode="FR"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="FR"
          className="rounded-lg"
        />
      </Link>
      <Link
        href="/resume/en"
        className={cn(
          "btn btn-ghost text-sm justify-start font-medium transition-colors hover:text-purple-700",
          pathname === "/resume/en"
            ? "text-black dark:text-white"
            : "text-muted-foreground"
        )}
      >
        Resume (English version)
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="GB"
          className="rounded-lg"
        />
      </Link>
    </nav>
  );
}

export default MobileNav;
