import React from "react";
import { shallow, mount } from "enzyme";
import Advert from "./index";
import renderer from "react-test-renderer";

describe("Advert", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Advert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  let hide = () => {
    return false;
  };

  it("should hide when button clicked", () => {
    const component = mount(<Advert />);
    const button = component.find("button");
    button.simulate("click", { target: { hideAdvert: true } });
    expect(component.state().hideAdvert).toEqual(true);
  });
});
