import React from "react";
import { Wrapper, Ring } from "./Loading.style";

function Loading() {
  return (
    <Wrapper data-testid="loading-component">
      <Ring />
    </Wrapper>
  );
}

export default Loading;
