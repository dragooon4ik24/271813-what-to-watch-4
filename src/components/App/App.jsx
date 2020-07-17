import React from "react";
import PropTypes from "prop-types";
import Main from "../Main/Main.jsx";

export default function App({promoTitle, promoGenre, promoYear, films}) {
  return (
    <Main
      title={promoTitle}
      genre={promoGenre}
      year={promoYear}
      films={films}
    />
  );
}

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.string),
};
