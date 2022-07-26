import React from "react";
import styled from "styled-components";

const ArticlePreview = ({ title, abstract, section, subsection, image }) => {
  return (
    <NewsCard>
      <Img src={image.url} alt={image.caption} />
      <InfoContainer>
        <h3>{title}</h3>
        <p>{abstract}</p>
        <p>{`${section}  ${subsection}`}</p>
      </InfoContainer>
    </NewsCard>
  );
};

export default ArticlePreview;

const NewsCard = styled.div`
  padding: 2.5%;
  display: flex;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    border: 0;
  }
`;

const Img = styled.img`
  width: 375px;
  height: auto;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding-left: 5%;
`;

// title={article.title}
//         abstract={article.abstract}
//         section={article.section}
//         subsection={article.subsection}
