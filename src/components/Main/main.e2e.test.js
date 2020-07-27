import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main.jsx";
import {promo, listFilms} from "../../mocks/mocks.js";

Enzyme.configure({adapter: new Adapter()});

it(`check mouse click on promo title`, () => {
  const handleClick = jest.fn();
  const main = mount(
      <Main
        title={promo.title}
        genre={promo.genre}
        year={promo.year}
        films={listFilms}
        onClick={handleClick}
      />
  );
  const titleButton = main.find(`a.small-movie-card__link`);
  let countButton = titleButton.length;
  for (let i = 0; i < countButton; i++) {
    titleButton.at(i).simulate(`click`);
  }

  expect(handleClick.mock.calls.length).toBe(countButton);
});
