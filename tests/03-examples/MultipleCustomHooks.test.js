import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("pruebas en MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("debe de mostar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test("debe de mostrar un character", () => {
    useFetch.mockReturnValue({
      data: {
        image: "image.png",
        name: "morty",
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("morty")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe llamar la funcion de incrementar", () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    useFetch.mockReturnValue({
      data: {
        image: "image.png",
        name: "morty",
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
