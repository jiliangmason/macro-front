import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home(props) {
  const { history } = props;
  useEffect(() => {}, []);

  return (
    <Main>
      <Content>home</Content>
    </Main>
  );
}

const Main = styled.main`
  color: black;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
