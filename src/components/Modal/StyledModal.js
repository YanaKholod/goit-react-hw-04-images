import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  `,
  ModalSize: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    max-height: 300px;
  `,
};
