import React from "react";
import {render, screen} from "@testing-library/react";
import {ENGTable} from "../../../components/atoms";

describe("Render table", () => {
    test("displays empty table", () => {
      render(<ENGTable/>);
  
      const table = screen.getByRole("table");
  
      expect(table).toBeInTheDocument();
    });

    test("displays default paramenters when data is not passed", () => {
        render(<ENGTable columns = {[]} rows = {[]}/>);
    
        const table = screen.getByRole("table");
    
        expect(table).toBeInTheDocument();
      });
});

describe("Render table with data", () => {
    test("displays table with 1 column and 1 row", () => {
      render(<ENGTable 
        columns={[{field: "A", headerName: "A"}]}
        rows={[{A:"B"}]}
        />);
      
      const header = screen.getByRole("columnheader", {name:/A/i});
      const cell = screen.getByRole("cell", {name:/B/i});
  
      expect(header).toBeInTheDocument();
      expect(cell).toBeInTheDocument();
    });

    test("displays 1 unchecked checkbox in a row", () => {
        render(<ENGTable 
            columns={[{field: "checkbox"}]}
            rows={[{checkbox: true}]}
        />);
    
        const header = screen.getByRole("columnheader");
        const input = screen.getByRole("checkbox", {checked:false});
    
        expect(header).toBeInTheDocument();
        expect(input).toBeInTheDocument();
      });
});