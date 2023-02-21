import React from "react";
import Button from "@mui/material/Button";

function ENGButton(props: any) {
  const {children = "Unassigned Button Text"} = props;
  return <Button {...props}>{children}</Button>;
}

export default ENGButton;
