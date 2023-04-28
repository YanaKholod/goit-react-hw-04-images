import styled from 'styled-components';

export const Styled = {
  Button: styled.button`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    padding: 8px 16px;

    border-radius: 2px;
    text-align: center;

    display: block;
    border: 0;
    text-decoration: none;
    cursor: pointer;

    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  `,
  ClearButton: styled.button`
    position: relative;
    right: 0;

    width: 48px;
    height: 48px;

    background-image: url('https://png.pngtree.com/png-clipart/20190614/original/pngtree-back-vector-icon-png-image_3791389.jpg');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;

    opacity: 0.5;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      opacity: 0.8;
    }
  `,
};
