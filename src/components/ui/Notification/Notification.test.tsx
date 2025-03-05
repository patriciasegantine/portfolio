import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Notification from "./Notification";

jest.useFakeTimers();

describe("Notification component", () => {
  const mockOnClose = jest.fn();
  const message = "Test notification message";
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("should render the SUCCESS notification with the correct message and styles", () => {
    render(<Notification message={message} type="success" onClose={mockOnClose}/>);
    
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByTestId("notification-icon")).toHaveClass("bg-green-500")
    expect(screen.getByTestId("success-icon")).toBeInTheDocument()
  });
  
  it("should render the ERROR notification with the correct message and styles", () => {
    render(<Notification message={message} type="error" onClose={mockOnClose}/>);
    
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByTestId("notification-icon")).toHaveClass("bg-red-500")
    expect(screen.getByTestId("error-icon")).toBeInTheDocument()
  });
  
  it("should call onClose after 5000ms", async () => {
    render(<Notification message={message} type="success" onClose={mockOnClose}/>);
    expect(mockOnClose).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(5000);
    
    await waitFor(() => expect(mockOnClose).toHaveBeenCalledTimes(1));
  });
  
  it("should pause the timer on mouse enter and resume on mouse leave", async () => {
    render(<Notification message={message} type="error" onClose={mockOnClose}/>);
    
    fireEvent.mouseEnter(screen.getByText(message));
    jest.advanceTimersByTime(5000);
    
    expect(mockOnClose).not.toHaveBeenCalled();
    
    fireEvent.mouseLeave(screen.getByText(message));
    jest.advanceTimersByTime(5000);
    
    await waitFor(() => expect(mockOnClose).toHaveBeenCalledTimes(1));
  });
  
  it("should call onClose when the close button is clicked", async () => {
    render(<Notification message={message} type="success" onClose={mockOnClose}/>);
    
    fireEvent.click(screen.getByTestId("close-notification"))
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
