import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticleContainer = ({ articles }) => {
  const articleList = articles.map((article) => {
    return (
      <ArticlePreview
        title={article.title}
        abstract={article.abstract}
        section={article.section}
        subsection={article.subsection}
        key={Math.random()}
      />
    );
  });

  return <div>{articleList}</div>;
};

export default ArticleContainer;
