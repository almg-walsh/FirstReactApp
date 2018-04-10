import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("handleCheckboxChange -  Number of checkboxes selected", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("One checkbox selected", () => {
    const wrapper = mount(<App />);
    const checkbox1 = wrapper.find({ value: "One" });
    checkbox1.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(1);
  });

  it("Two checkbox selected", () => {
    const wrapper = mount(<App />);
    const checkbox2 = wrapper.find({ value: "Two" });
    checkbox2.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(2);
  });

  it("Three checkbox selected", () => {
    const wrapper = mount(<App />);
    const checkbox3 = wrapper.find({ value: "Three" });
    checkbox3.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(3);
  });

  it("One checkbox unselected", () => {
    const wrapper = mount(<App />);
    const checkbox2 = wrapper.find({ value: "Two" });
    checkbox2.simulate("change", { target: { isChecked: false } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(1);
  });
});
