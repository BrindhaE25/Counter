import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import { fireEvent, render, waitFor } from "@testing-library/react";
import AsynchCounter from "./asynchCounter"

describe("Testing asychronous counter functionslity", () => {
    it("Increment the counter value after 0.5 seconds Increment button is clicked" , async() => {
        const { getByTestId, getByText} = render(<AsynchCounter/>);
        fireEvent.click(getByTestId("button-up"));
        const counter = await waitFor(() => getByText("1"));
        expect(counter).toHaveTextContent("1");

    });

});