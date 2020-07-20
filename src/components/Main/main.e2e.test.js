import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({ adapter: new Adapter() });

it(`check mouse click on promo title`, () => {
  const handleClick = jest.fn();
  const main = shallow();
});
