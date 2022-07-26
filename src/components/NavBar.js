import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ setArticleSection }) => {
  const [currentNews, setCurrentNews] = useState("Simple");

  return (
    <nav>
      <h1>{`${currentNews} News`}</h1>
      <NavLink
        to="/"
        onClick={() => {
          setCurrentNews("Simple");
          setArticleSection("home");
        }}
      >
        home
      </NavLink>
      <NavLink
        to="section/art"
        onClick={() => {
          setCurrentNews("Art");
          setArticleSection("arts");
        }}
      >
        art
      </NavLink>
      <NavLink
        to="section/automobiles"
        onClick={() => {
          setCurrentNews("Auto");
          setArticleSection("automobiles");
        }}
      >
        automobiles
      </NavLink>
      <NavLink
        to="section/books"
        onClick={() => {
          setCurrentNews("Book");
          setArticleSection("books");
        }}
      >
        books
      </NavLink>
      <NavLink
        to="section/business"
        onClick={() => {
          setCurrentNews("Business");
          setArticleSection("business");
        }}
      >
        business
      </NavLink>
      <NavLink
        to="section/fashion"
        onClick={() => {
          setCurrentNews("Fashion");
          setArticleSection("fashion");
        }}
      >
        fashion
      </NavLink>
      <NavLink
        to="section/food"
        onClick={() => {
          setCurrentNews("Food");
          setArticleSection("food");
        }}
      >
        food
      </NavLink>
      <NavLink
        to="section/health"
        onClick={() => {
          setCurrentNews("Health");
          setArticleSection("health");
        }}
      >
        health
      </NavLink>
      <NavLink
        to="section/movies"
        onClick={() => {
          setCurrentNews("Film");
          setArticleSection("movies");
        }}
      >
        movies
      </NavLink>
      <NavLink
        to="section/opinion"
        onClick={() => {
          setCurrentNews("Opinion");
          setArticleSection("opinion");
        }}
      >
        opinion
      </NavLink>
      <NavLink
        to="section/politics"
        onClick={() => {
          setCurrentNews("Political");
          setArticleSection("politics");
        }}
      >
        politics
      </NavLink>
      <NavLink
        to="section/real estate"
        onClick={() => {
          setCurrentNews("Real Estate");
          setArticleSection("realestate");
        }}
      >
        real estate
      </NavLink>
      <NavLink
        to="section/science"
        onClick={() => {
          setCurrentNews("Science");
          setArticleSection("science");
        }}
      >
        science
      </NavLink>
      <NavLink
        to="section/sports"
        onClick={() => {
          setCurrentNews("Sports");
          setArticleSection("sports");
        }}
      >
        sports
      </NavLink>
      <NavLink
        to="section/technology"
        onClick={() => {
          setCurrentNews("Tech");
          setArticleSection("technology");
        }}
      >
        technology
      </NavLink>
      <NavLink
        to="section/theater"
        onClick={() => {
          setCurrentNews("Theater");
          setArticleSection("theater");
        }}
      >
        theater
      </NavLink>
      <NavLink
        to="section/travel"
        onClick={() => {
          setCurrentNews("Travel");
          setArticleSection("travel");
        }}
      >
        travel
      </NavLink>
      <NavLink
        to="section/us"
        onClick={() => {
          setCurrentNews("US");
          setArticleSection("us");
        }}
      >
        us
      </NavLink>
      <NavLink
        to="section/world"
        onClick={() => {
          setCurrentNews("World");
          setArticleSection("world");
        }}
      >
        world
      </NavLink>
    </nav>
  );
};

export default NavBar;
