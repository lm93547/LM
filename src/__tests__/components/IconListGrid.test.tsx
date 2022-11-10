import { render } from "@testing-library/react";
import { ThemeWrapper } from "../testHelpers/themeWrapper";
import {matchMedia} from "../testHelpers/matchMedia"
import IconListGrid from "../../components/IconListGrid";
import { technologies } from "../../constants/technologies";

beforeEach(()=>{
    matchMedia()
})

describe("IconHeader UI Test", ()=>{
    test("The IconHeader UI component renders without console errors", ()=>{
        render(<IconListGrid gridItems={technologies} templateColumns="repeat(2, minmax(120px, 140px))" />, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0)
    });
    test("The IconHeader UI component renders the correct amount of icons", ()=>{
        const {getAllByTestId} = render(<IconListGrid gridItems={technologies} templateColumns="repeat(2, minmax(120px, 140px))" />, {wrapper: ThemeWrapper});
        expect(getAllByTestId("list-item")).toHaveLength(technologies.length)
    });
    test("The IconHeader UI component renders the correct text for all the items", ()=>{
        const {getByText} = render(<IconListGrid gridItems={technologies} templateColumns="repeat(2, minmax(120px, 140px))" />, {wrapper: ThemeWrapper});
        technologies.map(({name}, i)=>{
            expect(getByText(name)).toBeTruthy()
        })
    });
})