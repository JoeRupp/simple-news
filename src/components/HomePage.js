import React from "react";
import ArticleContainer from "./ArticleContainer";
import styled from "styled-components";

const HomePage = ({ articles }) => {
  return (
    <HomeSection>
      <ArticleContainer articles={articles} />
    </HomeSection>
  );
};

export default HomePage;

const HomeSection = styled.section`
  margin-top: 45px;
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
