/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-27 18:16:19
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-27 18:50:34
 */
import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home(props) {
  const { history } = props;
  useEffect(() => {}, []);

  /**
   * @description: 跳转子APP
   * @param {type}
   * @return:
   */
  function goApp(path) {
    history.go(path);
  }

  return (
    <Main>
      <Content>home</Content>
      <a href="javascript:;" onClick={() => goApp("../app1")}>
        app1
      </a>
    </Main>
  );
}

const Main = styled.main`
  color: red;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
