import { render, screen } from "@testing-library/react";
import LoadingComponent from "./LoadingComponent";

describe("LoadingComponent", () => {
  it("renders with default message", () => {
    render(<LoadingComponent/>);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByTestId("loading").querySelector("svg")).toBeTruthy();
  });
  
  it("renders with a custom message", () => {
    const customMessage = "Please wait";
    render(<LoadingComponent message={customMessage}/>);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
  
  it("assigns the correct testId", () => {
    const customTestId = "custom-loading";
    render(<LoadingComponent testId={customTestId}/>);
    expect(screen.getByTestId(customTestId)).toBeInTheDocument();
  });
  
  it("applies correct classes for styling", () => {
    render(<LoadingComponent/>);
    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement).toHaveClass("loading", "flex", "justify-center", "items-center", "gap-2");
    expect(loadingElement.querySelector(".icon")).toBeTruthy();
  });
});
