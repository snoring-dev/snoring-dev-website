import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <div className="mx-auto w-full lg:px-4 xl:px-0 lg:max-w-7xl">{children}</div>;
}

export default Container;
