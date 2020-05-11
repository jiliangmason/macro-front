import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home(props) {
  const { history } = props;
  useEffect(() => {}, []);

  function goTest() {
    history.push("/test");
  }

  return (
    <Main>
      <Content>app1</Content>
      <a onClick={goTest}>go test1</a>
    </Main>
  );
}

const Main = styled.main`
  color: red;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
