import React from "react";
import { mount } from "enzyme";
import Checkbox from "./index";

describe("Advert", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not be checked", () => {
    const wrapper = mount(<Checkbox />);
    const event = { target: { isChecked: false } };
    wrapper.find("input").simulate("change", event);
    expect(wrapper.state().isChecked).toEqual(false);
    expect(wrapper.props().handleCheckboxChange(false));
  });
});
