import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import GlobalStyle from '../components/style/GlobalStyle';

if (__SERVER_ENV__ !== 'prod') {
  // eslint-disable-next-line global-require
  require('eruda').init();
}

const render = (props: { container?: Element }): void => {
  const { container } = props;
  ReactDOM.render(
    <>
      <Router basename="/">{routes()}</Router>
      <GlobalStyle />
    </>,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
};

export default render;
