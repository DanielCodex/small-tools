import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tw?: string;
}

function container({ children, tw }: Props) {
  return <div className={`container max-w-4xl mx-auto ${tw}`}>{children}</div>;
}

export default container;
