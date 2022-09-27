import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tw?: string;
}

function container({ children, tw }: Props) {
  return <div className={`container mx-auto mt-5 ${tw}`}>{children}</div>;
}

export default container;
