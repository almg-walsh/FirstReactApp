import React from "react";
import { mount } from "enzyme";
import Card from "./index";

describe("Card", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
