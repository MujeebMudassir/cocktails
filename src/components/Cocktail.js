import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, id, category, glass, ingredients, info, name }) => {
  return (
    <div className="cocktail">
      <img src={image} alt="" />
      <div className="details">
        <h3 className="name">{name}</h3>
        <p className="category">{category}</p>
        <h3 className="info">{info}</h3>
        <Link className="more-info" to={`/cocktails/${id}`}>
          more info
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
