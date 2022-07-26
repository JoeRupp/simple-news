import React from "react";
import ArticlePreview from "./ArticlePreview";
import styled from "styled-components";

const ArticleContainer = ({ articles }) => {
  const articleList = articles.map((article, index) => {
    return (
      <ArticlePreview
        image={article.multimedia[0]}
        title={article.title}
        abstract={article.abstract}
        section={article.section}
        subsection={article.subsection}
        key={index}
        id={index}
      />
    );
  });

  return <Container>{articleList}</Container>;
};

export default ArticleContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;
