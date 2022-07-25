import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticleContainer = ({ data }) => {
  const articles = data.map((article) => {
    return (
      <ArticlePreview
        name={article.name}
        description={article.description}
        key={article.id}
      />
    );
  });

  return <div>{articles}</div>;
};

export default ArticleContainer;
