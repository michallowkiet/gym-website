import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Htext = ({ children, className }: Props) => {
  return (
    <h1 className={`basis-3/5 font-montserrat text-3xl ${className}`}>
      {children}
    </h1>
  );
};

export default Htext;
