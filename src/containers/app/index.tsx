import React, { Component } from 'react';
import { GlobalStyle } from '../../styles/global';
import { AppStyle } from './styles';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppStyle.Container>
          <header>Alexandria</header>
          <div className="main">
            <main className="left-nav">…</main>
            <nav className="content">
              <code>
                The Great Library of Alexandria in Alexandria, Egypt, was one of the largest and most significant
                libraries of the ancient world.
              </code>
            </nav>
            <aside className="right-nav">…</aside>
          </div>
          <footer>…</footer>
        </AppStyle.Container>
      </React.Fragment>
    );
  }
}
