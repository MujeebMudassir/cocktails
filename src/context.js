import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = useCallback(async () => {
    console.log("hello");
    setLoading(true);
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    let myCocktails;
    if (data.drinks) {
      myCocktails = data.drinks.map((item) => {
        const {
          idDrink: id,
          strDrinkThumb: image,
          strAlcoholic: info,
          strDrink: name,
          strCategory: category,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = item;

        return {
          id,
          image,
          info,
          name,
          category,
          glass,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
      });
    } else {
      myCocktails = [];
    }

    setCocktails(myCocktails);
    setLoading(false);
  });
  useEffect(
    () => {
      fetchCocktails();
    },
    [search],
    [fetchCocktails]
  );
  return (
    <AppContext.Provider
      value={{
        cocktails,
        loading,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
