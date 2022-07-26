import React from "react";
import ArticleContainer from "./ArticleContainer";

const SubSectionPage = ({ articles }) => {
  return (
    <section>
      <ArticleContainer articles={articles} />
    </section>
  );
};

export default SubSectionPage;
