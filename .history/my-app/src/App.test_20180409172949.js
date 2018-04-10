import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("handleCheckboxChange -  Number of checkboxes selected", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("One checkbox selected", () => {
    const component = mount(<App />);
    const checkbox1 = component.find({ value: "One" });
    checkbox1.simulate("change", { target: { isChecked: true } });
    expect(component.state().numberOfCheckboxes).toEqual(1);
  });

  it("Two checkbox selected", () => {
    const component = mount(<App />);
    const checkbox2 = component.find({ value: "Two" });
    checkbox2.simulate("change", { target: { checked: true } });
    expect(component.state().numberOfCheckboxes).toEqual(2);
  });

  it("Three checkbox selected", () => {
    const component = mount(<App />);
    const checkbox3 = component.find({ value: "Three" });
    checkbox3.simulate("change", { target: { isChecked: true } });
    expect(component.state().numberOfCheckboxes).toEqual(3);
  });

  it("One checbox unselected", () => {
    const component = mount(<App />);
    const checkbox2 = component.find({ value: "Two" });
    checkbox2.simulate("change", { target: { isChecked: false } });
    expect(component.state().numberOfCheckboxes).toEqual(1);
  });
});
