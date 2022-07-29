import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const subsections = [
  { headline: "Art", button: "arts" },
  { headline: "Auto", button: "automobiles" },
  { headline: "Book", button: "books" },
  { headline: "Business", button: "business" },
  { headline: "Fashion", button: "fashion" },
  { headline: "Food", button: "food" },
  { headline: "Health", button: "health" },
  { headline: "Film", button: "movies" },
  { headline: "Opinion", button: "opinion" },
  { headline: "Politics", button: "politics" },
  { headline: "Science", button: "science" },
  { headline: "Sports", button: "sports" },
  { headline: "Tech", button: "technology" },
  { headline: "Theater", button: "theater" },
  { headline: "Travel", button: "travel" },
  { headline: "US", button: "us" },
  { headline: "World", button: "world" },
];

const NavBar = ({ setArticleSection }) => {
  const [currentNews, setCurrentNews] = useState("Simple");

  const navLinks = subsections.map((section, index) => {
    return (
      <NavigationLink
        className="nav-btn"
        to={`section/${section.button}`}
        onClick={() => {
          setCurrentNews(section.headline);
          setArticleSection(section.button);
        }}
        key={index}
      >
        {section.headline}
      </NavigationLink>
    );
  });

  return (
    <Nav>
      <Header>{`${currentNews} News`}</Header>
      <BtnContainer>
        <NavigationLink
          className="nav-btn"
          to="/"
          onClick={() => {
            setCurrentNews("Simple");
            setArticleSection("home");
          }}
        >
          Home
        </NavigationLink>
        {navLinks}
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
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
