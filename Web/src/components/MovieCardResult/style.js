import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 160px;
    color: ${theme.white};
  }

  div {
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 5px;
    margin: 5px;
    height: auto;
    align-items: center;

    img {
        height: 190px;
        width: 120px;
      }

    h5 {
      color: ${theme.white};
      background: ${theme.primary};
      width: 100%;
      max-width: 120px;
      max-height: 32px;
      height: 32px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .2s ease-in-out;
    }
  }
`;
