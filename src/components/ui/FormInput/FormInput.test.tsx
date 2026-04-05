import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInput from "@/components/ui/FormInput/FormInput";

describe("FormInput Component", () => {
  it("renders an input with label association", () => {
    render(<FormInput id="username" label="Username"/>);
    const labelElement = screen.getByText("Username");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toHaveAttribute("for", "username");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe("INPUT");
  });
  
  it("renders a textarea when rows is provided", () => {
    render(<FormInput id="message" label="Message" rows={4}/>);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.tagName).toBe("TEXTAREA");
    expect(textareaElement).toHaveAttribute("rows", "4");
  });
  
  it("calls the onChange handler when the value changes for input", () => {
    const handleChange = jest.fn();
    render(<FormInput id="username" label="Username" onChange={handleChange}/>);
    const inputElement = screen.getByRole("textbox");
    
    fireEvent.change(inputElement, {target: {value: "JohnDoe"}});
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
  
  it("applies accessibility attributes", () => {
    render(
      <FormInput
        id="email"
        label="Email"
        ariaInvalid="true"
        ariaDescribedBy="error-message"
      />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("aria-invalid", "true");
    expect(inputElement).toHaveAttribute("aria-describedby", "error-message");
  });
});
