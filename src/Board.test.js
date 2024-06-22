import React from "react";
import { render } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect'; 
import Board from "./Board";

test("renders Board without crashing", () => {
    render(<Board />);
  });

test("renders the starter board", () => {
  jest.spyOn(Math, "random").mockReturnValue(0.5); 
  const { container } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0.5} />);
  expect(container).toMatchSnapshot();
  Math.random.mockRestore(); 
});
