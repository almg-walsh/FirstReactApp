import React from "react";
import { mount } from "enzyme";
import Advert from "./index";

describe("Advert", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Advert />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should hide when button clicked", () => {
    const wrapper = mount(<Advert />);
    const button = wrapper.find("button");
    button.simulate("click", { target: { hideAdvert: true } });
    expect(wrapper.state().hideAdvert).toEqual(true);
  });
});
