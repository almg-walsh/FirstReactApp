import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("handleCheckboxChange -  Number of checkboxes selected", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("checkbox selected", () => {
    const wrapper = mount(<App />);
    const checkboxOne = wrapper.find({ value: "One" });
    const checkboxTwo = wrapper.find({ value: "Two" });
    const checkboxThree = wrapper.find({ value: "Three" });
    const checkboxUnselected = wrapper.find({ value: "Two" });

    checkboxOne.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(1);

    checkboxTwo.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(2);

    checkboxThree.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(3);

    checkboxUnselected.simulate("change", { target: { isChecked: false } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(2);
  });
});
