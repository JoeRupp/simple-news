import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ArticlePage = ({ getArticle }) => {
  const { articleId } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    setArticle(getArticle(articleId));
  }, [article]);

  return (
    <ArticleSection>
      <ArticleDate>{article.updated_date}</ArticleDate>
      {article.multimedia && (
        <Img
          src={article.multimedia[0].url}
          alt={article.multimedia[0].caption}
        />
      )}
      <Headline>{article.title}</Headline>
      <Byline>{article.byline}</Byline>
      <ArticleInfo>{article.abstract}</ArticleInfo>
      <BtnToArticle>Read the full article</BtnToArticle>
    </ArticleSection>
  );
};

export default ArticlePage;

const ArticleSection = styled.section``;

const ArticleDate = styled.p``;

const Img = styled.img``;

const Headline = styled.h2``;

const Byline = styled.h3``;

const ArticleInfo = styled.p``;

const BtnToArticle = styled.button``;
