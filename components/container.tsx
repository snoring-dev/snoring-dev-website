import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <div className="mx-auto lg:px-4 xl:px-0 max-w-7xl">{children}</div>;
}

export default Container;
