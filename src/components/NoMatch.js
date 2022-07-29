import React from "react";
import styled from "styled-components";

const NoMatch = () => {
  return (
    <NoMatchSection>
      <h1>404</h1>
      <h3>
        We couldn't find what you were looking for - try something different I
        guess?
      </h3>
    </NoMatchSection>
  );
};

export default NoMatch;

const NoMatchSection = styled.section`
  text-align: center;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`;
