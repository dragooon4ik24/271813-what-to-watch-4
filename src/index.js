import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";

const init = () => {
  const promo = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
  };
  ReactDOM.render(
      <App promoTitle={promo.title} promoGenre={promo.genre} promoYear={promo.year}/>,
      document.querySelector(`#root`)
  );
};

init();
