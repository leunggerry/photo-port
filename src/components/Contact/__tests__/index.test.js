import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("renders - verfiy frag", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders - test contact rendering", () => {
  render(<Contact />);
  expect(screen.getByTestId("h1tag")).toHaveTextContent("Contact me");
});

it("renders - test button", () => {
  render(<Contact />);
  expect(screen.getByTestId("button")).toHaveTextContent("Submit");
});
