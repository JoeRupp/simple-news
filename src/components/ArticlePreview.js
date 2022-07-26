import React from "react";

const ArticlePreview = ({ title, abstract, section, subsection }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{abstract}</p>
      <p>{`${section} | ${subsection}`}</p>
    </div>
  );
};

export default ArticlePreview;

// title={article.title}
//         abstract={article.abstract}
//         section={article.section}
//         subsection={article.subsection}
