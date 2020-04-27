import React, { useEffect } from "react";
import styled from "styled-components";

export default function Test() {
  useEffect(() => {}, []);

  return <Main>test2</Main>;
}

const Main = styled.main`
  color: green;
`;
