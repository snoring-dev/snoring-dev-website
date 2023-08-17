"use client";

import { cn } from "@/utils";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { usePathname } from "next/navigation";

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const resumeRegex = new RegExp(/^\/resume\//);

  const routes = [
    {
      href: `/`,
      label: "Overview",
      active: pathname === `/`,
      type: "link",
    },
    {
      href: `/portfolio`,
      label: "Portfolio",
      active: pathname === `/portfolio`,
      type: "link",
    },
    {
      href: `#resume`,
      label: "Resume",
      active: resumeRegex.test(pathname),
      type: "menu",
      menu: [
        {
          href: `/resume/fr`,
          label: "French version",
          active: pathname === `/resume/fr`,
          icon: () => (
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
          ),
        },
        {
          href: `/resume/en`,
          label: "English version",
          active: pathname === `/resume/en`,
          icon: () => (
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
          ),
        },
      ],
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => {
        const { type = "link" } = route;

        if (type === "link") {
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-700",
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          );
        }

        if (type === "menu") {
          const { menu = [] } = route;
          return (
            <div key={route.href} className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className={cn(
                  "cursor-pointer text-sm font-medium transition-colors hover:text-purple-700",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </label>
              {menu.length > 0 && (
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  {menu?.map((m, k) => (
                    <li key={k}>
                      <Link
                        className="w-full flex justify-between items-center"
                        href={m.href}
                        target="_blank"
                      >
                        {m.label}
                        {m.icon()}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}

export default MainNav;
