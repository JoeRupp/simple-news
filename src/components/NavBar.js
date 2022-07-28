import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = ({ setArticleSection }) => {
  const [currentNews, setCurrentNews] = useState("Simple");

  return (
    <Nav>
      <Header>{`${currentNews} News`}</Header>
      <BtnContainer>
        <NavigationLink
          to="/"
          onClick={() => {
            setCurrentNews("Simple");
            setArticleSection("home");
          }}
        >
          home
        </NavigationLink>
        <NavigationLink
          to="section/art"
          onClick={() => {
            setCurrentNews("Art");
            setArticleSection("arts");
          }}
        >
          art
        </NavigationLink>
        <NavigationLink
          to="section/automobiles"
          onClick={() => {
            setCurrentNews("Auto");
            setArticleSection("automobiles");
          }}
        >
          auto
        </NavigationLink>
        <NavigationLink
          to="section/books"
          onClick={() => {
            setCurrentNews("Book");
            setArticleSection("books");
          }}
        >
          books
        </NavigationLink>
        <NavigationLink
          to="section/business"
          onClick={() => {
            setCurrentNews("Business");
            setArticleSection("business");
          }}
        >
          business
        </NavigationLink>
        <NavigationLink
          to="section/fashion"
          onClick={() => {
            setCurrentNews("Fashion");
            setArticleSection("fashion");
          }}
        >
          fashion
        </NavigationLink>
        <NavigationLink
          to="section/food"
          onClick={() => {
            setCurrentNews("Food");
            setArticleSection("food");
          }}
        >
          food
        </NavigationLink>
        <NavigationLink
          to="section/health"
          onClick={() => {
            setCurrentNews("Health");
            setArticleSection("health");
          }}
        >
          health
        </NavigationLink>
        <NavigationLink
          to="section/movies"
          onClick={() => {
            setCurrentNews("Film");
            setArticleSection("movies");
          }}
        >
          movies
        </NavigationLink>
        <NavigationLink
          to="section/opinion"
          onClick={() => {
            setCurrentNews("Opinion");
            setArticleSection("opinion");
          }}
        >
          opinion
        </NavigationLink>
        <NavigationLink
          to="section/politics"
          onClick={() => {
            setCurrentNews("Political");
            setArticleSection("politics");
          }}
        >
          politics
        </NavigationLink>
        <NavigationLink
          to="section/science"
          onClick={() => {
            setCurrentNews("Science");
            setArticleSection("science");
          }}
        >
          science
        </NavigationLink>
        <NavigationLink
          to="section/sports"
          onClick={() => {
            setCurrentNews("Sports");
            setArticleSection("sports");
          }}
        >
          sports
        </NavigationLink>
        <NavigationLink
          to="section/technology"
          onClick={() => {
            setCurrentNews("Tech");
            setArticleSection("technology");
          }}
        >
          tech
        </NavigationLink>
        <NavigationLink
          to="section/theater"
          onClick={() => {
            setCurrentNews("Theater");
            setArticleSection("theater");
          }}
        >
          theater
        </NavigationLink>
        <NavigationLink
          to="section/travel"
          onClick={() => {
            setCurrentNews("Travel");
            setArticleSection("travel");
          }}
        >
          travel
        </NavigationLink>
        <NavigationLink
          to="section/us"
          onClick={() => {
            setCurrentNews("US");
            setArticleSection("us");
          }}
        >
          us
        </NavigationLink>
        <NavigationLink
          to="section/world"
          onClick={() => {
            setCurrentNews("World");
            setArticleSection("world");
          }}
        >
          world
        </NavigationLink>
      </BtnContainer>
    </Nav>
  );
};

export default NavBar;

const Header = styled.h1`
  font-size: 35px;
  font-weight: 800;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 85vw;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  border-right: black solid 1.5px;
  border-left: black solid 1.5px;
  height: 30px;
  width: 90px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    background-color: black;
  }
`;
