import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import SubSectionPage from "./SubSectionPage";
import ArticlePage from "./ArticlePage";
import NoMatch from "./NoMatch";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import apiCalls from "../apiCalls";
import styled from "styled-components";

const App = () => {
  const [currentArticleList, setArticleList] = useState([]);
  const [currentArticleSection, setArticleSection] = useState("home");

  useEffect(() => {
    apiCalls
      .getArticles(currentArticleSection)
      .then((data) => setArticleList(data.results));
  }, [currentArticleSection]);

  return (
    <Main>
      <NavBar setArticleSection={setArticleSection} />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage articles={currentArticleList} />}
        />
        <Route
          exact
          path="section/:sectionName"
          element={<SubSectionPage articles={currentArticleList} />}
        />
        <Route exact path="article/:articleId" element={<ArticlePage />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
    </Main>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
