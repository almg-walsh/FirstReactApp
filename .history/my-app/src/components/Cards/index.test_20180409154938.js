import React from "react";
import { mount } from "enzyme";
import Cards from "./index";

describe("Cards", () => {
  it("one checkbox should be checked", () => {
    const wrapper = mount(<Cards checkboxesChecked="1" />);
    expect(wrapper.prop("checkboxesChecked")).toEqual("1");
    expect(wrapper).toMatchSnapshot();
  });
  it("two checkboxes should be checked", () => {
    const wrapper = mount(
      <Cards checkboxesChecked="2" className="borderBackground" />
    );
    expect(wrapper.prop("checkboxesChecked")).toEqual("2");
    expect(wrapper.hasClass("borderBackground")).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
  it("checkbox should be checked", () => {
    const wrapper = mount(<Cards isChecked="true" />);
    expect(wrapper.prop("isChecked")).toEqual("true");
  });
});
