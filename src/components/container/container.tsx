import React from "react";

interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <div className="w-[90%] lg:w-[80%] mx-auto ">{children}</div>;
};

export default Container;
