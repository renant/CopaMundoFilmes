import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Card = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: auto;
    padding: 5px;
    margin: 5px;
    height: auto;
    align-items: center;
    border: 1px ${theme.gray} solid;
    transition: .5s ease;

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

    ${({ selected }) => selected && `
      border: 1px solid black;
      box-shadow: 0 0 0 3px #00FF00;
      border-radius: 2%;
      transition: .5s ease;
      transform: scale(0.9);
    `}

    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
`;
