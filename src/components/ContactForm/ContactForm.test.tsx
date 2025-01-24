import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/ContactForm/ContactForm";
import { validationMessages } from "@/validate/validationFormMessage";
import { successMessages } from "@/validate/successMessages";

jest.mock("@/hook/useFetchSendEmail", () => ({
  __esModule: true,
  default: () => mockUseSendEmail,
}));

const mockFormData = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "This is a test message.",
};

const mockUseSendEmail = {
  sendEmail: jest.fn(),
  isLoading: false,
  error: null,
  success: false,
};

const fillFormWithValidData = () => {
  fireEvent.change(screen.getByLabelText("Name"), {target: {value: mockFormData.name}});
  fireEvent.change(screen.getByLabelText("Email"), {target: {value: mockFormData.email}});
  fireEvent.change(screen.getByLabelText("Message"), {target: {value: mockFormData.message}});
};

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  localStorage.clear()
  cleanup()
});

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({})
  } as Response);
});

describe("ContactForm", () => {
  it("renders the form without errors initially", () => {
    render(<ContactForm/>);
    
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });
  
  it("renders all input fields correctly with empty initial state", () => {
    render(<ContactForm/>);
    
    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Email")).toHaveValue("");
    expect(screen.getByLabelText("Message")).toHaveValue("");
    expect(screen.getByTestId("submit-button")).not.toBeDisabled();
  });
  
  it("should NOT DISPLAY validation error messages when the form is loaded initially", () => {
    render(<ContactForm/>);
    
    const allErrorMessages = Object.values(validationMessages)
      .flatMap((fieldMessages) => Object.values(fieldMessages));
    
    allErrorMessages.forEach((message) => {
      expect(screen.queryByText(message)).not.toBeInTheDocument();
    });
  });
  
  it("does NOT RESET the form on invalid submission", () => {
    render(<ContactForm/>);
    
    fireEvent.change(screen.getByLabelText("Name"), {target: {value: mockFormData.name}});
    fireEvent.change(screen.getByLabelText("Email"), {target: {value: "invalid-email"}});
    fireEvent.change(screen.getByLabelText("Message"), {target: {value: mockFormData.message}});
    
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    
    expect(screen.getByLabelText("Name")).toHaveValue(mockFormData.name);
    expect(screen.getByLabelText("Email")).toHaveValue("invalid-email");
    expect(screen.getByLabelText("Message")).toHaveValue(mockFormData.message);
  });
  
  it("sets focus to the first invalid field on failed validation", () => {
    render(<ContactForm/>);
    
    const clickSend = () => fireEvent.click(screen.getByTestId("submit-button"));
    
    const fillField = (label: string, value: string) => {
      fireEvent.change(screen.getByLabelText(label), {target: {value}});
    };
    
    clickSend();
    expect(screen.getByLabelText("Name")).toHaveFocus();
    
    fillField("Name", mockFormData.name);
    clickSend();
    expect(screen.getByLabelText("Email")).toHaveFocus();
    
    fillField("Email", mockFormData.email);
    clickSend();
    expect(screen.getByLabelText("Message")).toHaveFocus();
  });
  
  it("should allow form submission with valid inputs and display loading state", async () => {
    mockUseSendEmail.isLoading = true;
    mockUseSendEmail.sendEmail.mockResolvedValueOnce({status: 200});
    
    render(<ContactForm/>);
    
    fillFormWithValidData();
    
    const submitButton = screen.getByTestId("submit-button");
    
    fireEvent.click(submitButton);
    
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent("Sending...");
    
    await waitFor(() => {
      const allErrorMessages = Object.values(validationMessages).flatMap((fieldMessages) =>
        Object.values(fieldMessages)
      );
      allErrorMessages.forEach((errorMessage) => {
        expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
      });
      
      expect(submitButton).toHaveTextContent("Sending...");
      expect(submitButton).not.toBeEnabled();
    });
  });
  
  it("should display success modal after successfully submitting the form", async () => {
    render(<ContactForm/>);
    
    fillFormWithValidData()
    
    const {title, description} = successMessages;
    
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.findByText(title)).resolves.toBeInTheDocument();
      expect(screen.findByText(description)).resolves.toBeInTheDocument();
    })
  });
  
  it("should handle input maximum lengths", async () => {
    render(<ContactForm/>);
    const longName = "a".repeat(51);
    const inputElement = screen.getByLabelText("Name");
    
    await userEvent.type(inputElement, longName);
    
    expect(inputElement).toHaveValue(longName.slice(0, 50));
  });
  
});
