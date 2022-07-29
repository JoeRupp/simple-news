import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const ArticlePage = ({ getArticle }) => {
  const { articleId } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    setArticle(getArticle(articleId));
  }, [articleId, getArticle]);

  return (
    <ArticleSection>
      {article.multimedia && (
        <Img
          src={article.multimedia[0].url}
          alt={article.multimedia[0].caption}
        />
      )}
      <Headline>{article.title}</Headline>
      <InfoContainer>
        <Byline>{article.byline}</Byline>
        <ArticleDate>
          {moment(article.updated_date).subtract(6, "days").calendar()}
        </ArticleDate>
      </InfoContainer>
      <ArticleInfo>{article.abstract}</ArticleInfo>
      {article.url && (
        <BtnToArticle
          style={{ textDecoration: "none" }}
          href={`${article.url}`}
          target="_blank"
        >
          Read the full article
        </BtnToArticle>
      )}
    </ArticleSection>
  );
};

export default ArticlePage;

const ArticleSection = styled.section`
  margin-top: 45px;
  margin-bottom: 45px;
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleDate = styled.p`
  color: lightgrey;
  margin: 0;
`;

const Img = styled.img`
  height: 50vh;
  width: 70%;
  object-fit: cover;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Headline = styled.h2`
  font-weight: 800;
  text-align: center;
`;

const Byline = styled.h3`
  color: lightgrey;
  margin: 0;
  margin-right: 5%;
`;

const ArticleInfo = styled.p`
  text-align: center;
  width: 70%;
`;

const BtnToArticle = styled.a`
  background-color: transparent;
  color: black;
  text-decoration: none;
  font-weight: 600;
  border: 0;
  border-right: black solid 1.5px;
  border-left: black solid 1.5px;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    background-color: black;
  }
`;
