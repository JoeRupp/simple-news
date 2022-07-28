import React from "react";
import ArticleContainer from "./ArticleContainer";
import styled from "styled-components";

const SubSectionPage = ({ articles }) => {
  return (
    <SubSection>
      <ArticleContainer articles={articles} />
    </SubSection>
  );
};

export default SubSectionPage;

const SubSection = styled.section`
  margin-top: 45px;
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
