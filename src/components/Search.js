import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { StyledForm } from "../styles/styles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <FaSearch />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </StyledForm>
  );
};

export default Search;
