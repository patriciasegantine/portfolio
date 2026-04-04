// jest.setup.ts
import '@testing-library/jest-dom'; // Para adicionar matchers como "toBeInTheDocument"
import fetchMock from "jest-fetch-mock";
import React from "react";

fetchMock.enableMocks();

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    onClick,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
    return React.createElement(
      "a",
      {
        ...props,
        href,
        onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          onClick?.(event);
        },
      },
      children,
    );
  };
});
