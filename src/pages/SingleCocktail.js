import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleCocktail = () => {
  const { cocktails } = useGlobalContext();
  const { id } = useParams();
  console.log(id);
  const singleCocktail = cocktails.find((item) => item.id === id);
  console.log(singleCocktail);
  const navigate = useNavigate();
  if (!singleCocktail) {
    navigate("/");
  }
  return (
    <div className="section-center grid-center">
      <div className="image-container">
        <img src={singleCocktail?.image} alt="" />
      </div>
      <div className="information-container">
        <h3>
          <span className="info-green">Name</span>:{singleCocktail?.name}
        </h3>
        <h3>
          <span className="info-green">Category</span>:
          {singleCocktail?.category}
        </h3>
        <h3>
          <span className="info-green">Glass Type</span>:{singleCocktail?.glass}
        </h3>
        <h3>
          <span className="info-green">Ingredients</span>:
          {singleCocktail?.ingredients.map((item) =>
            item ? `${item}, ` : null
          )}
        </h3>
      </div>
    </div>
  );
};

export default SingleCocktail;
