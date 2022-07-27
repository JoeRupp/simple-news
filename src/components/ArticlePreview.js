import React from "react";
import styled from "styled-components";

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
      <NewsCardNoImage>
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
      <NewsCard>
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

const NewsCard = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  border-left: black solid 1.5px;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    border: 0;
  }
`;

const NewsCardNoImage = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-left: black solid 1.5px;
  &:hover {
    cursor: pointer;
    color: #35aad6;
    border: 0;
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
`;

const Img = styled.img`
  width: 100%;
  max-width: 350px;
  height: 100%;
  max-height: 275px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding-left: 5%;
`;

const SubTitle = styled.h3`
  color: lightgrey;
  margin-top: 0;
  margin-right: 2%;
`;
