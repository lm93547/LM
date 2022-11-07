import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { socialLinks } from '../../constants/navLinks';
import {ThemeWrapper} from '../testHelpers/themeWrapper';

describe("Footer UI test", ()=>{
    test("The Footer UI component renders without console errors", ()=>{
        render(<Footer />, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0)
    });
    test("The Footer Renders the social link titles", ()=>{
        const {getByText} = render(<Footer />, {wrapper: ThemeWrapper});
        socialLinks.map((link)=>{
            expect(getByText(link.title)).toBeTruthy();
        });
    });
});