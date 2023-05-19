import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

let Wrapper = styled.div`
  margin: 4rem 0;
`;

let Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 10;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

let Gradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

let StyledForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(45rem, 100%);
  margin: 3rem auto;
  input {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    width: 100%;
    padding: 1rem 3rem;
    font-size: 1.3rem;
    border: 0;
    outline: 0;
    border-radius: 1rem;
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

let List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  text-align: center;
  gap: 1rem;
`;

let StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* margin-right: 3rem; */
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  height: 6rem;
  min-width: 6rem;
  transform: scale(0.8);
  text-decoration: none;
  text-align: center;
  h4,
  svg {
    color: white;
  }
  h4 {
    margin-top: 0.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

let Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  grid-gap: 3rem;
  a {
    text-decoration: none;
  }
`;

let GridCard = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    padding: 1rem;
    text-align: center;
  }
`;

let DetailWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  justify-content: center;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
  .active {
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  .img {
    width: 100%;
    height: 15rem;
    max-height: 18rem;
    margin-block: 5rem;
    @media screen and (min-width: 992px) {
      margin-right: 2rem;
      width: 43%;
      margin-block: 0.7rem 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

let Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  cursor: pointer;
`;

let Info = styled.div`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 53%;
  }
  div {
    h3 {
      font-size: 1rem;
      &:first-of-type {
        margin-top: 0.5rem;
      }
    }
  }
  ul {
    margin-top: 0.7rem;
    list-style: inside;
    line-height: 1;
    padding: 0 0.5rem;
  }
`;

export {
  Wrapper,
  Card,
  Gradient,
  StyledForm,
  List,
  StyledNavLink,
  Grid,
  GridCard,
  DetailWrapper,
  Info,
  Button,
};
