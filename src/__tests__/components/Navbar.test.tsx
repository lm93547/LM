import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import {ThemeWrapper} from '../testHelpers/themeWrapper';

describe("Navbar UI test", ()=>{
    test("The Navbar UI component renders without console errors", ()=>{
        render(<Navbar />, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0)
    });
});