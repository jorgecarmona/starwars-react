import React from "react";
import {render, screen} from "@testing-library/react";
import {ENGButton} from "../../../components/atoms";

describe("Render button", () => {
  test("displays Button", () => {
    render(<ENGButton>Click</ENGButton>);

    const button = screen.getByRole("button", {name: /click/i});

    expect(button).toBeInTheDocument();
  });

  test("displays default text when Button text is not passed", () => {
    render(<ENGButton></ENGButton>);

    const button = screen.getByRole("button", {name: /Unassigned Button Text/i});

    expect(button).toBeInTheDocument();
  });
});

describe("Button takes Material UI API", () => {
  test("has disabled property when disabled is true", () => {
    render(<ENGButton disabled={true}>Click Me</ENGButton>);

    const button = screen.getByRole("button", {name: /click me/i});

    expect(button).toHaveAttribute("disabled");
  });

  test("does not have disabled property when disabled is false", () => {
    render(<ENGButton disabled={false}>Click Me</ENGButton>);

    const button = screen.getByRole("button", {name: /click me/i});

    expect(button).not.toHaveAttribute("disabled");
  });
});
