import React from "react";
import PropTypes from "prop-types";

export default function Film({name, onClick}) {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/revenant.jpg" alt="Revenant" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onClick}
        >
          {name}
        </a>
      </h3>
    </article>
  );
}

Film.propTypes = {
  name: PropTypes.oneOf([
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
