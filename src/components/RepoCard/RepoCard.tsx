import React from "react";
import { Wrapper, Header, Title, Tag, Description } from "./RepoCard.style";

function RepoCard() {
  return (
    <Wrapper>
      <Header>
        <Title>Nome do repo</Title>
        <Tag>Público</Tag>
      </Header>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quaerat
        iusto voluptates aliquam corrupti cumque. Nostrum, sunt. Aliquid
        incidunt vitae iusto possimus, quo voluptas, consequuntur sapiente
        deleniti accusamus, natus perferendis?
      </Description>
      <Tag>Typescript</Tag>
    </Wrapper>
  );
}

export default RepoCard;
