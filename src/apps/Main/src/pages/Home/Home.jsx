import React, { useEffect } from "react";
import styled from "styled-components";
import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
  initGlobalState,
} from "qiankun";
import { apps } from "../../../../../config";
import reactRender from "../../../render/ReactRender";

export default function Home(props) {
  const { history } = props;
  useEffect(() => {
    initApps();
  }, []);

  function initApps() {
    /**
     * Step1 初始化应用（可选）
     */
    reactRender({ loading: false });

    /**
     * Step2 注册子应用
     */
    registerApps();

    /**
     * Step3 设置默认进入的子应用
     */
    setDefaultMountApp("/app1");

    /**
     * Step4 启动应用
     */
    start();

    runAfterFirstMounted(() => {
      console.log("[MainApp] first app mounted");
    });
  }

  function registerApps() {
    const regApps = apps.map((item) => {
      const { name, entry, activeRule } = item;
      return {
        name,
        entry,
        container: "#subapp-viewport",
        activeRule,
      };
    });
    registerMicroApps(regApps, {
      beforeLoad: [
        (app) => {
          console.log(
            "[LifeCycle] before load %c%s",
            "color: green;",
            app.name
          );
        },
      ],
      beforeMount: [
        (app) => {
          console.log(
            "[LifeCycle] before mount %c%s",
            "color: green;",
            app.name
          );
        },
      ],
      afterUnmount: [
        (app) => {
          console.log(
            "[LifeCycle] after unmount %c%s",
            "color: green;",
            app.name
          );
        },
      ],
    });

    const { onGlobalStateChange, setGlobalState } = initGlobalState({
      user: "qiankun",
    });

    onGlobalStateChange((value, prev) =>
      console.log("[onGlobalStateChange - master]:", value, prev)
    );

    setGlobalState({
      ignore: "master",
      user: {
        name: "master",
      },
    });
  }

  function goApp(path) {
    window.history.pushState(null, path, path);
  }
  return (
    <Main>
      <Content>
        <Header>header</Header>
        <ASide>
          <RouteItem href="javascript:;" onClick={() => goApp("/app1")}>
            app1
          </RouteItem>
          <RouteItem href="javascript:;" onClick={() => goApp("/app2")}>
            app2
          </RouteItem>
          <RouteItem href="javascript:;" onClick={() => goApp("/app3")}>
            app3
          </RouteItem>
        </ASide>
      </Content>
    </Main>
  );
}

const Main = styled.main`
  color: black;
`;
const Header = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 30px;
  /* padding: 10px; */
  text-align: center;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;
const ASide = styled.ul`
  position: fixed;
  top: 30px;
  bottom: 0;
  left: 0;
  width: 200px;
  background: #f2f2f2;
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
const RouteItem = styled.li`
  width: 200px;
  list-style: none;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
