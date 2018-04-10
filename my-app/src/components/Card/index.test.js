import React from "react";
import { mount } from "enzyme";
import Card from "./index";

describe("Card", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should show text", () => {
    const wrapper = mount(<Card />);
    const button = wrapper.find("button");
    button.simulate("click", { target: { showTextComponent: true } });
    expect(wrapper.state().showTextComponent).toEqual(true);
  });
});
