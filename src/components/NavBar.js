import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [currentNews, setCurrentNews] = useState("Simple");
  return (
    <nav>
      <h1>{`${currentNews} News`}</h1>
      <NavLink to="/" onClick={() => setCurrentNews("Simple")}>
        home
      </NavLink>
      <NavLink to="section/art" onClick={() => setCurrentNews("Art")}>
        art
      </NavLink>
      <NavLink to="section/automobiles" onClick={() => setCurrentNews("Auto")}>
        automobiles
      </NavLink>
      <NavLink to="section/books" onClick={() => setCurrentNews("Book")}>
        books
      </NavLink>
      <NavLink to="section/business" onClick={() => setCurrentNews("Business")}>
        business
      </NavLink>
      <NavLink to="section/fashion" onClick={() => setCurrentNews("Fashion")}>
        fashion
      </NavLink>
      <NavLink to="section/food" onClick={() => setCurrentNews("Food")}>
        food
      </NavLink>
      <NavLink to="section/health" onClick={() => setCurrentNews("Health")}>
        health
      </NavLink>
      <NavLink to="section/movies" onClick={() => setCurrentNews("Film")}>
        movies
      </NavLink>
      <NavLink to="section/opinion" onClick={() => setCurrentNews("Opinion")}>
        opinion
      </NavLink>
      <NavLink
        to="section/politics"
        onClick={() => setCurrentNews("Political")}
      >
        politics
      </NavLink>
      <NavLink
        to="section/real estate"
        onClick={() => setCurrentNews("Real Estate")}
      >
        real estate
      </NavLink>
      <NavLink to="section/science" onClick={() => setCurrentNews("Science")}>
        science
      </NavLink>
      <NavLink to="section/sports" onClick={() => setCurrentNews("Sports")}>
        sports
      </NavLink>
      <NavLink to="section/technology" onClick={() => setCurrentNews("Tech")}>
        technology
      </NavLink>
      <NavLink to="section/theater" onClick={() => setCurrentNews("Theater")}>
        theater
      </NavLink>
      <NavLink to="section/travel" onClick={() => setCurrentNews("Travel")}>
        travel
      </NavLink>
      <NavLink to="section/us" onClick={() => setCurrentNews("US")}>
        us
      </NavLink>
      <NavLink to="section/world" onClick={() => setCurrentNews("World")}>
        world
      </NavLink>
    </nav>
  );
};

export default NavBar;
