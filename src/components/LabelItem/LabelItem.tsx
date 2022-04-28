import React, { FunctionComponent } from "react";
import { WrapperItem, ItemDescription } from "./LabelItem.style";

interface LabelItemProps {
  Icon: FunctionComponent;
  label?: string;
}
function LabelItem({ Icon, label }: LabelItemProps) {
  if (!label || !label?.length) return null;
  return (
    <WrapperItem>
      <Icon />
      <ItemDescription>{label}</ItemDescription>
    </WrapperItem>
  );
}

export default LabelItem;
