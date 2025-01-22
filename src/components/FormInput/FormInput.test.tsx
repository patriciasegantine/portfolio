import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
  
  it("renders input with the correct initial value", () => {
    render(
      <FormInput
        id="email"
        label="Email"
        value="test@example.com"
        onChange={() => {
        }}
        placeholder="Enter your email"
      />
    );
    
    const inputElement = screen.getByPlaceholderText("Enter your email");
    
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("test@example.com");
  });
  
  it("includes placeholder, value, and type for input", () => {
    render(
      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        value="test@example.com"
        onChange={() => {
        }}
      />
    );
    const inputElement = screen.getByPlaceholderText("Enter your email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "email");
    expect(inputElement).toHaveValue("test@example.com");
  });
  
  it("includes placeholder and value for textarea", () => {
    render(
      <FormInput
        id="bio"
        label="Bio"
        rows={5}
        onChange={() => {
        }}
        placeholder="Write about yourself"
        value="I am a developer."
      />
    );
    const textareaElement = screen.getByPlaceholderText(
      "Write about yourself"
    );
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveAttribute("rows", "5");
    expect(textareaElement).toHaveValue("I am a developer.");
  });
  
  it("calls the onChange handler when the value changes for input", () => {
    const handleChange = jest.fn();
    render(<FormInput id="username" label="Username" onChange={handleChange}/>);
    const inputElement = screen.getByRole("textbox");
    
    fireEvent.change(inputElement, {target: {value: "JohnDoe"}});
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Optional, verify the event object
  });
  
  it("renders with the correct className", () => {
    render(
      <FormInput id="test" label="Test" className="custom-class"/>
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
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
