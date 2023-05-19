import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};

let Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`;

let Nav = styled.nav`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    font-size: 2rem;
  }
`;

export default App;
