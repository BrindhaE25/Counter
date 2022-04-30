import { getByTestId, waitFor } from "@testing-library/react";
import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from "./Counter";
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import { fireEvent, render } from "@testing-library/react";
import TestAxios from "./TestAxios";
import axiosMock from "axios";
import { wait } from "@testing-library/user-event/dist/utils";

jest.mock("axios");
it("Should display a loading text", () => {
    const {getByTestId} = render(<TestAxios/>);
    expect(getByTestId("loading")).toHaveTextContent("Loading..");

});

it("Should load and display data",async () => {
    const url = '/hello';
    const {getByTestId} = render(<TestAxios url={url}/>);
    axiosMock.get.mockResolvedValueOnce({
        data : {hello : "Hello NEEV 12"};
    })

    fireEvent.click(getByTestId("fetch-data"));
    const helloData = await waitFor(()=> getByTestId("show-data"));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(helloData).toHaveTextContent(Hello NEEV 12);

})