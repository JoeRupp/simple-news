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
      {/* <Img src={article.url} alt={article.caption} /> */}
      <Headline></Headline>
      <ArticleInfo>Lorem Ispsum</ArticleInfo>
      <BtnToArticle>Read the full article</BtnToArticle>
    </ArticleSection>
  );
};

export default ArticlePage;

const ArticleSection = styled.section``;

const Img = styled.img``;

const Headline = styled.h2``;

const ArticleInfo = styled.p``;

const BtnToArticle = styled.button``;
