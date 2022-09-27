import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function container({ children }: Props) {
  return <div className="w-lg container mx-auto">{children}</div>;
}

export default container;
