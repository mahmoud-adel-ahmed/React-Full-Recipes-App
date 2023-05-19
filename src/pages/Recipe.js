import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "../styles/styles";

const Recipe = () => {
  let { name: recipe } = useParams();
  let [details, setDetails] = useState({});
  let [activeTab, setActiveTab] = useState("instructions");
  let fetchRecipe = async (name) => {
    try {
      let { data: recipe } = await axios.get(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setDetails(recipe);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe(recipe);
  }, [recipe]);
  return (
    <>
      {Object.keys(details).length ? (
        <DetailWrapper>
          <div className="img">
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
          </div>
          <Info>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "1rem",
              }}
            >
              <Button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => {
                  setActiveTab("instructions");
                }}
              >
                Instructions
              </Button>
              <Button
                className={activeTab === "Ingradients" ? "active" : ""}
                onClick={() => {
                  setActiveTab("Ingradients");
                }}
              >
                Ingradients
              </Button>
            </div>
            {activeTab === "instructions" && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
              </div>
            )}
            {activeTab === "Ingradients" && (
              <ul>
                {details.extendedIngredients?.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </Info>
        </DetailWrapper>
      ) : (
        <h4
          style={{
            textAlign: "center",
            color: "#ccc",
            textTransform: "capitalize",
          }}
        >
          loading recipe details...
        </h4>
      )}
    </>
  );
};

export default Recipe;
