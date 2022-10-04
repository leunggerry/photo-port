import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  test("renders", () => {
    render(<Nav />);
  });

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//second suite to better organzie test
describe("emoji is visible", () => {
  it("inserts emoji into h2", () => {
    //arrange
    // getByLabelText mehtod
    const { getByLabelText } = render(<Nav />);
    //assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// test for link visibility

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    //getByTestId is similar to getElementById
    // data-testid attribute specific for testing purposes instead of using id
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About Me");
  });
});
