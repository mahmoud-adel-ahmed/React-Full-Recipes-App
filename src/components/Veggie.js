import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Card, Gradient, Wrapper } from "../styles/styles";
import { Link } from "react-router-dom";

const Veggie = () => {
  let [veggie, setVeggie] = useState([]);

  let fetchRecipes = async () => {
    let check = localStorage.getItem("veggie");
    if (check) {
      let storedVeggie = JSON.parse(check);
      setVeggie(storedVeggie);
    } else {
      try {
        let response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        );
        let { recipes } = response.data;
        setVeggie(recipes);
        localStorage.setItem("veggie", JSON.stringify(recipes));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      {veggie.length ? (
        <Wrapper>
          <h3>Our Vegetarian Picks</h3>
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "1.5rem",
              mediaQuery: "min",
              breakpoints: {
                720: {
                  perPage: 2,
                },
                1200: {
                  perPage: 3,
                },
              },
            }}
          >
            {veggie?.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Link to={`recipe/${recipe.id}`}>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe?.image} alt={recipe.title} />
                      <Gradient />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      ) : (
        <h4
          style={{
            textAlign: "center",
            color: "#ccc",
            textTransform: "capitalize",
          }}
        >
          loading veggie and popular recipes...
        </h4>
      )}
    </div>
  );
};

export default Veggie;
