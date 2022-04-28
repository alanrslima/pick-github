import React from "react";
import {
  Wrapper,
  ProfileImage,
  WrapperInfo,
  Title,
  WrapperItem,
  ItemDescription,
  Description,
} from "./Profile.style";
import { FaAt, FaBuilding, FaLink, FaMapMarkerAlt } from "react-icons/fa";

function Profile() {
  return (
    <Wrapper>
      <ProfileImage src="https://avatars.githubusercontent.com/u/31439832?v=4"></ProfileImage>
      <WrapperInfo>
        <Title>John William • Desenvolvedor Senior</Title>
        <WrapperItem>
          <FaAt />
          <ItemDescription>john_will</ItemDescription>
        </WrapperItem>
        <WrapperItem>
          <FaBuilding />
          <ItemDescription>Google Company</ItemDescription>
        </WrapperItem>
        <WrapperItem>
          <FaLink />
          <ItemDescription>www.google.com.br</ItemDescription>
        </WrapperItem>
        <WrapperItem>
          <FaMapMarkerAlt />
          <ItemDescription>Los Angeles</ItemDescription>
        </WrapperItem>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          laudantium placeat non. Impedit reiciendis maxime est, tenetur porro
          asperiores dolorem aliquam ab nobis quibusdam, odit cupiditate, dolore
          deleniti nam illo!
        </Description>
      </WrapperInfo>
    </Wrapper>
  );
}

export default Profile;
