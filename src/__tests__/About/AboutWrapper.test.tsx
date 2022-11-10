import React from "react";
import { render } from "@testing-library/react";
import { ThemeWrapper } from "../testHelpers/themeWrapper";
import { matchMedia } from "../testHelpers/matchMedia";
import AboutWrapper from "../../components/about/AboutWrapper";

beforeEach(() => {
  matchMedia();
});

const TestBody = <>Test Body</>

describe("AboutWrapper UI test", () => {
  test("The AboutWrapper UI component renders without console errors", () => {
    render(
      <AboutWrapper
        aboutHeader="/assets/backgrounds/about-header.jpg"
        avatar="/assets/avatar/avatar-2.jpg"
      >
        {TestBody}
      </AboutWrapper>,
      { wrapper: ThemeWrapper }
    );
    const consoleError = jest.spyOn(global.console, "error");
    expect(consoleError).toBeCalledTimes(0);
  });
  test("The AboutWrapper UI component renders the 'Test Body' text", () => {
    const { getByText } = render(
      <AboutWrapper
        aboutHeader="/assets/backgrounds/about-header.jpg"
        avatar="/assets/avatar/avatar-2.jpg"
      >
        {TestBody}
      </AboutWrapper>,
      { wrapper: ThemeWrapper }
    );
    expect(getByText("Test Body")).toBeTruthy();
  });
});
