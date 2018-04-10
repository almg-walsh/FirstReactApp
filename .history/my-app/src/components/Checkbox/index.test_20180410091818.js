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
    const checkbox = wrapper.find("input");
    checkbox.simulate("change", { target: { checked: true } });
    expect(wrapper.state().isChecked).toEqual(true);
  });
});
