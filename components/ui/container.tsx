import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="container mx-auto max-w-7xl">{children}</div>;
}

export default Container;
