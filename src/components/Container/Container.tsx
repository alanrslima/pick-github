import React from "react";
import { ErrorProps } from "../../types/error";
import AlertMessage from "../AlertMessage/AlertMessage";
import Loading from "../Loading/Loading";

import { Wrapper } from "./Container.style";

interface ContainerProps {
  children: JSX.Element;
  loading?: boolean;
  error?: ErrorProps;
}
function Container({ children, loading, error }: ContainerProps) {
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return (
        <AlertMessage
          type="error"
          title={error.title}
          subTitle={error.subTitle}
        />
      );
    }

    return children;
  };

  return <Wrapper>{renderContent()}</Wrapper>;
}

export default Container;
