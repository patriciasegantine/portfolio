// jest.setup.ts
import '@testing-library/jest-dom'; // Para adicionar matchers como "toBeInTheDocument"
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
