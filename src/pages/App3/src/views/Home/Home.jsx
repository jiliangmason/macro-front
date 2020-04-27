import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home(props) {
  const { history } = props;
  useEffect(() => {}, []);

  function goTest() {
    history.push("/Test3");
  }

  return (
    <Main>
      <Content>app3</Content>
      <a onClick={goTest}>go test3</a>
    </Main>
  );
}

const Main = styled.main`
  color: black;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
