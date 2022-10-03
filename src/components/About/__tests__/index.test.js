import React from "react";
//import some react testing functions lib
import { render, cleanup } from "@testing-library/react";
// render - renders the component
// cleanup - removes the components from the DOM to prevent memory leaks

// jest-dom offers access to custom matchers for testing DOM elements
import "@testing-library/jest-dom/extend-expect";

import About from "..";

/**
 * Pre/Post Tests
 *
 * @description: each test we won't have leftover memory data that can give false results
 */
afterEach(cleanup);

describe("About component", () => {
  //renders About test

  //First Test - it() or test() can be used
  it("renders", () => {
    render(<About />);
  });

  //Second Test
  test("matches snapshot DOM node structure", () => {
    //render about
    const { asFragment } = render(<About />);

    //compare whether expected ad actual outcoemes match
    expect(asFragment()).toMatchSnapshot();
    //index.test.js.snap is created in the __snapshots__
  });
});
