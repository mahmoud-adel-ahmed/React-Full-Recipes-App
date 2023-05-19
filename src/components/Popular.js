import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Card, Gradient, Wrapper } from "../styles/styles";
import { Link } from "react-router-dom";

const Popular = () => {
  let [popular, setPopular] = useState([]);

  let fetchRecipes = async () => {
    let check = localStorage.getItem("popular");
    if (check) {
      let storedPopular = JSON.parse(check);
      setPopular(storedPopular);
    } else {
      try {
        let response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        let { recipes } = response.data;
        localStorage.setItem("popular", JSON.stringify(recipes));
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
      {popular.length ? (
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "1.5rem",
              mediaQuery: "min",
              breakpoints: {
                768: {
                  perPage: 2,
                },
                992: {
                  perPage: 3,
                },
                1200: {
                  perPage: 4,
                },
              },
            }}
          >
            {popular?.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Link to={`recipe/${recipe.id}`}>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Popular;
