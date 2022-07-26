import React from "react";
import ArticleContainer from "./ArticleContainer";

const HomePage = ({ articles }) => {
  return (
    <section>
      <ArticleContainer articles={articles} />
    </section>
  );
};

export default HomePage;
