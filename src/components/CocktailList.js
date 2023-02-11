import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h1>sorry not available</h1>;
  }
  return (
    <div className="cocktail-list">
      <h1>Cocktails..</h1>
      <article className="cocktail-container">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </article>
    </div>
  );
};

export default CocktailList;
