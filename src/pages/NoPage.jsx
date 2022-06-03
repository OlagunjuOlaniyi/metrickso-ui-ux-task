import React from "react";
import styled from "styled-components";

const NoPage = () => {
  return (
    <Container>
      <div>
        <h1>Oops!!!This Page Does Not Exist!</h1>
        <a href="/">Back Home</a>
      </div>
    </Container>
  );
};

export default NoPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 2;
    color: white;
  }
`;
