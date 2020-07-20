import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import { promo, listFilms } from "../../mocks/mocks.js";

it(`<App /> should render full app`, () => {
  const tree = renderer
    .create(
      <App
        promoTitle={promo.title}
        promoGenre={promo.genre}
        promoYear={promo.year}
        films={listFilms}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
