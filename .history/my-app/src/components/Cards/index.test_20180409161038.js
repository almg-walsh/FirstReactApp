import React from "react";
import { mount } from "enzyme";
import Cards from "./index";
import Card from "./index";

describe("Cards", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });

  it("one checkbox should be checked", () => {
    const wrapper = mount(<Card checkboxesChecked="1" className="border" />);
    expect(wrapper.prop("checkboxesChecked")).toEqual("1");
    expect(wrapper.hasClass("border")).toEqual(true);
  });
  it("two checkboxes should be checked", () => {
    const wrapper = mount(
      <Card checkboxesChecked="2" className="borderBackground" />
    );
    expect(wrapper.prop("checkboxesChecked")).toEqual("2");
    expect(wrapper.hasClass("borderBackground")).toEqual(true);
  });
  it("checkbox should be checked", () => {
    const wrapper = mount(<Cards isChecked="true" />);
    expect(wrapper.prop("isChecked")).toEqual("true");
  });
});
