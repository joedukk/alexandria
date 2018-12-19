import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from '../../styles/global';
import { AppStyle } from './styles';
import { AppRoutes } from '../../routes/app';
import MainNav from '../main-nav';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <AppStyle.Container>
            <header>Alexandria</header>
            <div className="main">
              <main className="left-nav">
                <MainNav />
              </main>
              <nav className="content">
                <AppRoutes />
              </nav>
              <aside className="right-nav">…</aside>
            </div>
            <footer>…</footer>
          </AppStyle.Container>
        </React.Fragment>
      </Router>
    );
  }
}
