import React from "react";
import { mount } from "enzyme";
import InjectedText from "./index";

describe("InjectedText", () => {
  it("should render correctly", () => {
    const wrapper = mount(<InjectedText />);
    expect(wrapper).toMatchSnapshot();
  });
});
