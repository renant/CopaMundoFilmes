import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Card = styled.div`
    display: flex;
    flex-direction: column-reverse;
    max-width: 134px;
    width: 134px;
    padding: 5px;
    margin: 5px;
    height: 200px;
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
      text-align: center;
    }

    ${({ selected }) => selected && `
      border: 1px solid black;
      box-shadow: 0 0 0 3px #00FF00;
      border-radius: 2%;
      transition: .5s ease;
    `}

    &:hover{
      cursor: pointer;
    }
`;
