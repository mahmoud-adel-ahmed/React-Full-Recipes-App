import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List, StyledNavLink } from "../styles/styles";

const Category = () => {
  return (
    <List>
      <StyledNavLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledNavLink>
    </List>
  );
};

export default Category;
