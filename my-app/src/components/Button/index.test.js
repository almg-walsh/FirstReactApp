import React from "react";
import { mount } from "enzyme";
import Button from "./index";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
