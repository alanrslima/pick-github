import React from "react";

import { Wrapper, Title, SubTitle } from "./AlertMessage.style";

interface AlertMessageProps {
  title: string;
  subTitle?: string;
}
function AlertMessage(props: AlertMessageProps) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </Wrapper>
  );
}

export default AlertMessage;
