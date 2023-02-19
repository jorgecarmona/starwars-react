import React from "react";
import {render, screen} from "@testing-library/react";
import { ENGSwitch } from "../../components/atoms";

test("displays switch component", () => {
    render(<ENGSwitch />)
    const switchComponent = screen.getByTestId("eng-switch")
    expect(switchComponent).toBeInTheDocument()
})  