import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import { validationMessages } from "@/validate/validationFormMessage";
import { errorMessages } from "@/validate/errorMessages";
import { useSendEmail } from "@/hook/useSendEmail";

jest.mock("@/hook/useSendEmail", () => ({
  __esModule: true,
  useSendEmail: jest.fn(),
}));

const mockFormData = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "This is a test message.",
};

const mockSendEmail = jest.fn();
const mockUseSendEmail = {
  sendEmail: mockSendEmail,
  loading: false,
};

const fillForm = ({name, email, message}: typeof mockFormData) => {
  fireEvent.change(screen.getByLabelText("Name"), {target: {value: name}});
  fireEvent.change(screen.getByLabelText("Email"), {target: {value: email}});
  fireEvent.change(screen.getByLabelText("Message"), {target: {value: message}});
};

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  localStorage.clear();
  cleanup();
});

beforeEach(() => {
  jest.resetAllMocks();
  (useSendEmail as jest.Mock).mockReturnValue(mockUseSendEmail); // Substituído por 'import' e cast tipado de TS
});

describe("ContactForm", () => {
  const getSubmitButton = () => screen.getByTestId("submit-button");

  it("renders fields with empty state and active submit button", () => {
    render(<ContactForm/>);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Email")).toHaveValue("");
    expect(screen.getByLabelText("Message")).toHaveValue("");
    expect(screen.getByTestId("submit-button")).not.toBeDisabled();
  });

  it("does not show validation messages before any submit attempt", () => {
    render(<ContactForm/>);

    const allErrorMessages = Object.values(validationMessages).flatMap((fieldMessages) =>
      Object.values(fieldMessages)
    );

    allErrorMessages.forEach((message) => {
      expect(screen.queryByText(message)).not.toBeInTheDocument();
    });
  });

  it("does not submit and keeps user input when validation fails", () => {
    render(<ContactForm/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: mockFormData.name}});
    fireEvent.change(screen.getByLabelText("Email"), {target: {value: "invalid-email"}});
    fireEvent.change(screen.getByLabelText("Message"), {target: {value: mockFormData.message}});

    fireEvent.click(getSubmitButton());

    expect(screen.getByLabelText("Name")).toHaveValue(mockFormData.name);
    expect(screen.getByLabelText("Email")).toHaveValue("invalid-email");
    expect(screen.getByLabelText("Message")).toHaveValue(mockFormData.message);
    expect(mockSendEmail).not.toHaveBeenCalled();
  });

  it("focuses the first invalid field on failed validation", () => {
    render(<ContactForm/>);

    const clickSend = () => fireEvent.click(getSubmitButton());

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

  it("shows business error returned by sendEmail", async () => {
    mockSendEmail.mockResolvedValueOnce({success: false, message: "An error occurred!"});

    render(<ContactForm/>);

    fillForm(mockFormData);
    fireEvent.click(getSubmitButton());

    await waitFor(() => {
      expect(screen.getByText("An error occurred!")).toBeInTheDocument();
      expect(mockSendEmail).toHaveBeenCalledTimes(1);
    });
  });

  it("shows fallback notification when sendEmail throws unexpected error", async () => {
    mockSendEmail.mockRejectedValueOnce(new Error("Network down"));

    render(<ContactForm/>);
    fillForm(mockFormData);
    fireEvent.click(getSubmitButton());

    await waitFor(() => {
      expect(screen.getByText(errorMessages.submissionError.message)).toBeInTheDocument();
      expect(mockSendEmail).toHaveBeenCalledTimes(1);
    });
  });

  it("submits valid data, shows loading state, and resets the form on success", async () => {
    mockSendEmail.mockImplementation(async () => {
      mockUseSendEmail.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 10));
      mockUseSendEmail.loading = false;
      return Promise.resolve({success: true, message: "Email sent successfully!"});
    });

    render(<ContactForm/>);

    fillForm(mockFormData);

    const submitButton = getSubmitButton();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveTextContent("Sending...");
    });

    await waitFor(() => {
      expect(mockSendEmail).toHaveBeenCalledWith(expect.objectContaining(mockFormData));
    });

    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toHaveValue("");
      expect(screen.getByLabelText("Email")).toHaveValue("");
      expect(screen.getByLabelText("Message")).toHaveValue("");
    });

    await waitFor(() => {
      expect(screen.getByText("Email sent successfully!")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(submitButton).toHaveTextContent("Send Message");
    });
  });
});
