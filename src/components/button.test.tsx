import React from "react";
import Button from "./button"; // Asegúrate de que la ruta al componente es correcta
import { render, screen, fireEvent } from "@testing-library/react";
describe("Button Component", () => {
  test("renders the button with the text", () => {
    const { getByText } = render(<Button text="Click me" onClick={() => {}} />);
    const buttonElement = getByText(/click me/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
