"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const routes = [
    {
      href: `/`,
      label: "Overview",
      active: pathname === `/`,
    },
    {
      href: `/portfolio`,
      label: "Portfolio",
      active: pathname === `/portfolio`,
    },
    {
      href: `/resume/fr`,
      label: "Resume",
      active: pathname === `/resume/fr`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
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
      ))}
    </nav>
  );
}

export default MainNav;
