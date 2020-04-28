import React, { useEffect } from "react";
import styled from "styled-components";

export default function Login(props) {
  const { history } = props;
  useEffect(() => {}, []);

  return (
    <Main>
      <Content>login</Content>
    </Main>
  );
}

const Main = styled.main`
  color: black;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
