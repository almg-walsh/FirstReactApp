import React from "react";
import { mount } from "enzyme";
import Cards from "./index";

describe("Cards", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });

  it("one checkbox should be checked", () => {
    const wrapper = mount(<Cards numberOfCheckboxes="1" />);
    expect(wrapper.prop("numberOfCheckboxes").toEqual("1"));
  });
  it("two checkboxes should be checked", () => {
    const wrapper = mount(<Cards numberOfCheckboxes="2" />);
    expect(wrapper.prop("numberOfCheckboxes").toEqual("2"));
  });
});
