import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, GridCard } from "../styles/styles";

const Cuisine = () => {
  let [cuisine, setCuisine] = useState([]);
  let { type } = useParams();

  let fetchCuisine = async (type) => {
    try {
      let {
        data: { results },
      } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${type}`
      );
      setCuisine(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCuisine(type);
  }, [type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine?.map((recipe) => (
        <Link key={recipe.id} to={"/recipe/" + recipe.id}>
          <GridCard>
            <img src={recipe.image} alt="" />
            <h4>{recipe.title}</h4>
          </GridCard>
        </Link>
      ))}
      {!cuisine.length && (
        <h4
          style={{
            textAlign: "center",
            color: "#ccc",
            textTransform: "capitalize",
          }}
        >
          loading {type} cuisine recipes...
        </h4>
      )}
    </Grid>
  );
};

export default Cuisine;
