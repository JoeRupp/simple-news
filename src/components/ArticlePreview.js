import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticlePreview = ({
  title,
  abstract,
  section,
  subsection,
  image,
  id,
}) => {
  if (!image) {
    return (
      <NewsCardNoImage style={{ textDecoration: "none" }} to={`/article/${id}`}>
        <IdAndSectionDiv>
          <SubTitle>{id + 1}</SubTitle>
          <SubTitle>{`${section} ${subsection}`}</SubTitle>
        </IdAndSectionDiv>
        <CardContents>
          <InfoContainer>
            <h2>{title}</h2>
            <p>{abstract}</p>
          </InfoContainer>
        </CardContents>
      </NewsCardNoImage>
    );
  } else {
    return (
      <NewsCard style={{ textDecoration: "none" }} to={`/article/${id}`}>
        <IdAndSectionDiv>
          <SubTitle>{id + 1}</SubTitle>
          <SubTitle>{`${section} ${subsection}`}</SubTitle>
        </IdAndSectionDiv>
        <CardContents>
          <Img src={image.url} alt={image.caption} />
          <InfoContainer>
            <h2>{title}</h2>
            <p>{abstract}</p>
          </InfoContainer>
        </CardContents>
      </NewsCard>
    );
  }
};

export default ArticlePreview;

const NewsCard = styled(Link)`
  color: black;
  padding: 10px 20px 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  border-left: black solid 1.5px;
  display: inline-block;
  position: relative;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    border-left: #35aad6 solid 1.5px;
  }
  &:after {
    background-color: #35aad6;
    left: 0;
    content: "";
    width: 6px;
    bottom: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: left bottom;
    transition: transform 0.25s ease-out;
    height: 100%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: left bottom;
  }
`;

const NewsCardNoImage = styled(Link)`
  color: black;
  padding: 10px 20px 10px 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-left: black solid 1.5px;
  display: inline-block;
  position: relative;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    border-left: #35aad6 solid 1.5px;
  }
  &:after {
    background-color: #35aad6;
    left: 0;
    content: "";
    width: 6px;
    bottom: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: left bottom;
    transition: transform 0.25s ease-out;
    height: 100%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: left bottom;
  }
`;

const IdAndSectionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const CardContents = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 350px;
  height: 100%;
  max-height: 275px;
  object-fit: cover;
  margin-right: 5%;
`;

const InfoContainer = styled.div``;

const SubTitle = styled.h3`
  color: lightgrey;
  margin-top: 0;
  margin-right: 2%;
`;
