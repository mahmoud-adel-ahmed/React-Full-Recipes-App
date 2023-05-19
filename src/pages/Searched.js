import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, GridCard } from "../styles/styles";

const Searched = () => {
  let [searchedRecipes, setSearchedRecipes] = useState([]);
  let { search } = useParams();
  let fetchSearched = async (search) => {
    try {
      let {
        data: { results },
      } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      setSearchedRecipes(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearched(search);
  }, [search]);

  return (
    <Grid>
      {searchedRecipes?.map((recipe) => (
        <Link key={recipe.id} to={"/recipe/" + recipe.id}>
          <GridCard>
            <img src={recipe.image} alt="" />
            <h4>{recipe.title}</h4>
          </GridCard>
        </Link>
      ))}
      {!searchedRecipes.length && (
        <h4
          style={{
            textAlign: "center",
            color: "#ccc",
            textTransform: "capitalize",
          }}
        >
          Loading these recipes...
        </h4>
      )}
    </Grid>
  );
};

export default Searched;
