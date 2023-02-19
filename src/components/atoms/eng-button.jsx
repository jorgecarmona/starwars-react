import React from "react";
import Button from "@mui/material/Button";

function ENGButton(props) {
  return (
    <Button variant={props.variant} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default ENGButton;