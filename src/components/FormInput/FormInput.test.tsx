import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInput from "@/components/FormInput/FormInput";

describe("FormInput Component", () => {
  
  it("renders a label with the correct text", () => {
    render(<FormInput id="username" label="Username"/>);
    const labelElement = screen.getByText("Username");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.tagName).toBe("LABEL");
    expect(labelElement).toHaveAttribute("for", "username");
  });
  
  it("renders an input when rows is not provided", () => {
    render(<FormInput id="username" label="Username"/>);
    const inputElement = screen.getByRole("textbox");
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
});
