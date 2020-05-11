import React, { useEffect } from "react";
import styled from "styled-components";

export default function Test() {
  useEffect(() => {}, []);

  return <Main>test3</Main>;
}

const Main = styled.main`
  color: red;
`;
