import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from "./Counter";
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import { fireEvent, render } from "@testing-library/react";

describe("Basic rendering of counter", () => {
    it("Should render the value", () => {
        const counter = shallow(<Counter/>);
        const countervalue = counter.find(Text);
        expect(countervalue).toBeDefined();

    });

    it("Should be equal to 0", () => {
        const component = render(<Counter/>);
        expect(component.getByTestId("Counter")).toHaveTextContent(0);
    });

    it("Should be able to increment" , () => {
        const {getByTestId} = render(<Counter/>);
        expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
    });

    it("Should be unable to decrement", () => {
        const {getByTestId} = render(<Counter/>);
        expect(getByTestId("button-down")).not.toHaveAttribute("disabled");
    });

});

describe("Testing counter functionality", () => {
    it("Should increment the value when the increment button is pressed", () => {
        const {getByTestId} = render(<Counter/>);
        fireEvent.click(getByTestId("button-up"));
        expect(getByTestId("Counter")).toHaveTextContent(1);
    })

    it("Should decrement the value when the decrement button is pressed", () => {
        const {getByTestId} = render(<Counter/>);
        fireEvent.click(getByTestId("button-down"));
        expect(getByTestId("Counter")).toHaveTextContent(-1);
    })
})