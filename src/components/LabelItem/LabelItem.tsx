import React, { FunctionComponent } from "react";
import { WrapperItem, ItemDescription, ItemLink } from "./LabelItem.style";

interface LabelItemProps {
  Icon: FunctionComponent;
  label?: string;
  link?: boolean;
}
function LabelItem({ Icon, label, link }: LabelItemProps) {
  if (!label || !label?.length) return null;
  return (
    <WrapperItem>
      <Icon />
      {link ? (
        <ItemLink target={"_blank"} href={label}>
          {label}
        </ItemLink>
      ) : (
        <ItemDescription>{label}</ItemDescription>
      )}
    </WrapperItem>
  );
}

export default LabelItem;
