import React from "react";
import ArticlePreview from "./ArticlePreview";
import styled from "styled-components";

const ArticleContainer = ({ articles }) => {
  const articleList = articles.map((article, index) => {
    const pic = article.multimedia ? article.multimedia[0] : null;

    return (
      <ArticlePreview
        image={pic}
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
