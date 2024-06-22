import React from "react";
import { render } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect'; 
import Cell from "./Cell";

function renderCell(props) {
  return render(
    <table>
      <tbody>
        <tr>
          <Cell {...props} />
        </tr>
      </tbody>
    </table>
  );
}

test("renders a cell properly", () => {
    const { container } = renderCell({ isLit: true });
    const td = container.querySelector("td");
    expect(td.classList.contains("Cell-lit")).toBe(true);
  });