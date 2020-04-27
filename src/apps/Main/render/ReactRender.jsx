/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 15:57:40
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-26 15:28:46
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * 渲染子应用
 */
function Render(props) {
  const { appContent, loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
      <div dangerouslySetInnerHTML={{ __html: appContent }} />
    </>
  );
}
export default function render({ appContent, loading }) {
  const container = document.getElementById("subapp-container");
  ReactDOM.render(
    <Render appContent={appContent} loading={loading} />,
    container
  );
}
