import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home(props) {
  const { history } = props;
  useEffect(() => {}, []);

  function goTest() {
    history.push("/Test2");
  }

  return (
    <Main>
      <Content>app2</Content>
      <a onClick={goTest}>go test2</a>
    </Main>
  );
}

const Main = styled.main`
  color: green;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
