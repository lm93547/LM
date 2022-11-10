import { fireEvent, render } from "@testing-library/react";
import HomePageHero from "../../components/Hero/HomePageHero";
import { BIO, NAME, TAGLINE } from "../../constants/userInfo";
import { matchMedia } from "../testHelpers/matchMedia";
import { ThemeWrapper } from "../testHelpers/themeWrapper";

beforeAll(() => {
  matchMedia();
});

describe("HomePage Hero UI test", () => {
  test("The HomePage Hero component renders without console errors", () => {
    render(<HomePageHero />, { wrapper: ThemeWrapper });
    const consoleError = jest.spyOn(global.console, "error");
    expect(consoleError).toBeCalledTimes(0);
  });
  test("The HomePage Hero renders the name bio & tagline", () => {
    const { getByText } = render(<HomePageHero />, { wrapper: ThemeWrapper });
    expect(getByText(BIO)).toBeTruthy();
    expect(getByText(`${NAME} - ${TAGLINE}`)).toBeTruthy();
  });
  test("The window.open function should be fired when the user clicks the hero CTA button", () => {
    const { getByTestId } = render(<HomePageHero />, { wrapper: ThemeWrapper });
    const mockedOpen = jest.fn();
    // Without making a copy, you will have a circular dependency problem
    const originalOpen = window.open;
    window.open = mockedOpen;
    fireEvent.click(getByTestId("home-page-hero-link"));
    expect(mockedOpen).toBeCalled();
    window.open = originalOpen;
  });
});
