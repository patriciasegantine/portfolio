import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("renders the form with all input fields", () => {
    render(<ContactForm/>);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });
  
  it("does not call handleSubmit if inputs are empty", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {
    });
    render(<ContactForm/>);
    
    fireEvent.click(screen.getByTestId("submit-button"));
    
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
