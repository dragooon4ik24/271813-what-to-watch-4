import React from "react";
import renderer from "react-test-renderer";

import Film from "./film.jsx";
import { listFilms } from "../../mocks/mocks.js";

it(`<Film /> should render Fantastic Beasts`, () => {
  const tree = renderer.create(<Film name={listFilms[0]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
