import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

// Mock Functions for toggleModal
const mockToggleModal = jest.fn();

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

describe("Modal Component", () => {
  it("renders", () => {
    //baseline render component Test
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });

  it("Match Modal Snapshot", () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    // Arrange: Render Modal
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    // Act: Simulate click event
    fireEvent.click(screen.getByText("Close this modal"));
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
