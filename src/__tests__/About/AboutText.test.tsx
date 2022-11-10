import React from 'react';
import { render } from '@testing-library/react';
import {ThemeWrapper} from '../testHelpers/themeWrapper';
import AboutText from "../../components/about/AboutText"
import {matchMedia} from "../testHelpers/matchMedia"
import { ABOUT } from '../../constants/about';

beforeEach(()=>{
    matchMedia()
})

describe("AboutText UI test", ()=>{
    test("The AboutText UI component renders without console errors", ()=>{
        render(<AboutText />, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0)
    });
    test("The AboutText UI component renders the ABOUT constant text", ()=>{
        const {getByText} = render(<AboutText />, {wrapper: ThemeWrapper});
        expect(getByText(ABOUT)).toBeTruthy()
    });
});