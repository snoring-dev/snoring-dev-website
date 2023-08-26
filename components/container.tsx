import { cn } from "@/utils";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Container({ children, className }: Props) {
  return (
    <div
      className={cn(className, "mx-auto w-full lg:px-4 xl:px-0 lg:max-w-7xl")}
    >
      {children}
    </div>
  );
}

export default Container;
