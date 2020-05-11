import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";

export default function Login(props) {
  const { history } = props;
  useEffect(() => {}, []);

  function Login() {
    sessionStorage.setItem("jsessionid", "session");
    window.location.reload();
  }

  return (
    <Main>
      <Content>
        <Button type="primary" onClick={() => Login()}>
          登录
        </Button>
      </Content>
    </Main>
  );
}

const Main = styled.main`
  color: black;
`;
const Content = styled.div`
  padding: 20px;
  text-align: center;
`;
