import React from "react";
import { mount } from "enzyme";
import Cards from "./index";

describe("Cards", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });

  it("one checkbox should be checked", () => {
    const wrapper = mount(<Cards checkboxesChecked="1" />);
    expect(wrapper.prop("checkboxesChecked")).toEqual("1");
  });
  it("two checkboxes should be checked", () => {
    const wrapper = mount(<Cards checkboxesChecked="2" />);
    expect(wrapper.prop("checkboxesChecked")).toEqual("2");
  });
  it("checkbox should be checked", () => {
    const wrapper = mount(<Cards isChecked="true" />);
    expect(wrapper.prop("isChecked")).toEqual("true");
  });
});
