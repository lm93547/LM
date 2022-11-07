import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import NavMenu from '../../components/NavMenu';
import { navLinks } from '../../constants/navLinks';
import {ThemeWrapper} from '../testHelpers/themeWrapper'

describe("NavMenu UI test", ()=>{
    test("The NavMenu UI component renders without console errors", ()=>{
        render(<NavMenu />, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0);
    });
    test("The NavMenu link list renders the correct links", ()=>{
        const {getByText} = render(<NavMenu />, {wrapper: ThemeWrapper});
        navLinks.map((link)=>{
            expect(getByText(link.title)).toBeTruthy();
        });
    });
})