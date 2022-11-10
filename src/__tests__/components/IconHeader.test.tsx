import { render } from "@testing-library/react";
import { GoGist } from "react-icons/go";
import IconHeader from "../../components/IconHeader"
import { NAME } from "../../constants/userInfo";
import { ThemeWrapper } from "../testHelpers/themeWrapper";
import {matchMedia} from "../testHelpers/matchMedia"

beforeEach(()=>{
    matchMedia()
})

describe("IconHeader UI Test", ()=>{
    test("The IconHeader UI component renders without console errors", ()=>{
        render(<IconHeader icon={<GoGist />} text={NAME} />, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0)
    });
    test("The IconHeader UI component renders the text supplied", ()=>{
        const {getByText} = render(<IconHeader icon={<GoGist />} text={NAME} />, {wrapper: ThemeWrapper});
        expect(getByText(NAME)).toBeTruthy()
    });
    test("The Layout UI component renders the icon", ()=>{
        const {getByTestId} = render(<IconHeader icon={<GoGist />} text={NAME} />, {wrapper: ThemeWrapper});
        expect(getByTestId("icon")).toBeTruthy()
    });
})