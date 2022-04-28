import React from "react";

import { Wrapper } from "./Container.style";

interface ContainerProps {
  children: JSX.Element;
  loading?: boolean;
  error?: string;
}
const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
