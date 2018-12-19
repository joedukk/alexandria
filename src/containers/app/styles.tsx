import styled from 'styled-components';

export const AppStyle = {
  Container: styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    > .main {
      display: flex;
      flex: 1;

      > .content {
        flex: 1;
      }

      > .left-nav,
      > .right-nav {
        flex: 0 0 12em;
      }

      > .left-nav {
        order: -1;
      }
    }
  `
};
