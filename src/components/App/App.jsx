import React from "react";
import Main from "../Main/Main.jsx";

// eslint-disable-next-line react/prop-types
export default function App({promoTitle, promoGenre, promoYear}) {
  return <Main title={promoTitle} genre={promoGenre} year={promoYear}/>;
}
