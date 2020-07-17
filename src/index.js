import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";

const init = () => {
  const promo = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
  };
  const listFilms = [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
  ];
  ReactDOM.render(
      <App
        promoTitle={promo.title}
        promoGenre={promo.genre}
        promoYear={promo.year}
        films={listFilms}
      />,
      document.querySelector(`#root`)
  );
};

init();
