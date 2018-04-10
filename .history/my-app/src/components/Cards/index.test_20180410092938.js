import React from "react";
import { mount } from "enzyme";
import Cards from "./index";
import Card from "./index";

describe("Cards", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });
});
