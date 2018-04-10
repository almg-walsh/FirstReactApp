import React from "react";
import { shallow, mount } from "enzyme";
import Advert from "./index";
import renderer from "react-test-renderer";

describe("Advert", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Advert />).toJson();
    expect(tree).toMatchSnapshot();
  });
});
