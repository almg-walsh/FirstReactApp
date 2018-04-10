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
    const checkbox1 = wrapper.find({ value: "One" });
    checkbox1.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(1);

    const checkbox2 = wrapper.find({ value: "Two" });
    checkbox2.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(2);

    const checkbox3 = wrapper.find({ value: "Three" });
    checkbox3.simulate("change", { target: { isChecked: true } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(3);

    const checkboxUnselected = wrapper.find({ value: "Two" });
    checkboxUnselected.simulate("change", { target: { isChecked: false } });
    expect(wrapper.state().numberOfCheckboxes).toEqual(2);
  });
  if (
    ("should have 2 checkboxes selected",
    () => {
      const wrapper = mount(<App />);

      const checkbox1 = wrapper.find({ value: "One" });
      const checkbox2 = wrapper.find({ value: "Two" });

      checkbox1.simulate("change", { target: { isChecked: true } });
      checkbox2.simulate("change", { target: { isChecked: true } });

      expect(wrapper.state().numberOfCheckboxes).toEqual(2);
    })
  );
});
