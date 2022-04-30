import React from "react";

import { Wrapper, Title, SubTitle } from "./AlertMessage.style";
import {
  RiInformationFill,
  RiCheckFill,
  RiCloseCircleFill,
} from "react-icons/ri";
type AlertMessageTypes = "success" | "information" | "error";

interface AlertMessageProps {
  title: string;
  subTitle?: string;
  type?: AlertMessageTypes;
}
function AlertMessage({
  title,
  subTitle,
  type = "information",
}: AlertMessageProps) {
  const renderIcon = () => {
    switch (type) {
      case "information":
        return <RiInformationFill data-testid="information-icon" size={100} />;
      case "success":
        return <RiCheckFill data-testid="success-icon" size={100} />;
      case "error":
        return <RiCloseCircleFill data-testid="error-icon" size={100} />;
      default:
        return <RiInformationFill data-testid="information-icon" size={100} />;
    }
  };

  return (
    <Wrapper>
      {renderIcon()}
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
}

export default AlertMessage;
