import React from "react";
import ArticleContainer from "./ArticleContainer";

const HomePage = () => {
  const data = [
    { name: "Example 1", description: "Yeehaw howdy do dah day", id: 1 },
    { name: "Example 2", description: "Yeehaw howdy do dah day", id: 2 },
    { name: "Example 3", description: "Yeehaw howdy do dah day", id: 3 },
    { name: "Example 4", description: "Yeehaw howdy do dah day", id: 4 },
  ];

  return (
    <section>
      <ArticleContainer data={data} />
    </section>
  );
};

export default HomePage;
