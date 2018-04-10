import React from "react";
import { mount } from "enzyme";
import Checkbox from "./index";

describe("Advert", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });
});
