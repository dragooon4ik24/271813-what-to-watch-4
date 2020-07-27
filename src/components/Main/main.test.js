import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";
import {promo, listFilms} from "../../mocks/mocks.js";

it(`<Main /> should render main page`, () => {
  const tree = renderer
    .create(
        <Main
          title={promo.title}
          genre={promo.genre}
          year={promo.year}
          films={listFilms}
          onClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
