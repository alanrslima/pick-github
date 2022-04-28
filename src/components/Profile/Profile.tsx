import React from "react";
import {
  Wrapper,
  ProfileImage,
  WrapperInfo,
  Title,
  Description,
} from "./Profile.style";
import {
  FaAt,
  FaBuilding,
  FaLink,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { UserProps } from "../../types/user";
import LabelItem from "../LabelItem/LabelItem";

interface ProfileProps {
  user: UserProps;
}
function Profile({ user }: ProfileProps) {
  return (
    <Wrapper>
      <ProfileImage alt="Imagem de perfil" src={user.avatar_url}></ProfileImage>
      <WrapperInfo>
        <Title>{`${user.name}`}</Title>

        <LabelItem Icon={() => <FaAt />} label={user.login} />
        <LabelItem Icon={() => <FaBuilding />} label={user.company} />
        <LabelItem link Icon={() => <FaLink />} label={user.blog} />
        <LabelItem Icon={() => <FaMapMarkerAlt />} label={user.location} />
        <LabelItem Icon={() => <FaTwitter />} label={user.twitter_username} />

        <Description>{user.bio}</Description>
      </WrapperInfo>
    </Wrapper>
  );
}

export default Profile;
