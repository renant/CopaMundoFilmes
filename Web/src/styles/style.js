import styled from 'styled-components';
import { theme } from './theme';

export const Loading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 200px;
`

export const MainHeader = styled.div`
    width: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 10px;
    padding: 20px;
    height: 150px;
    color: ${theme.primary};
    border-bottom: 1px solid ${theme.gray};

    h3 {
      text-shadow: 2px 2px ${theme.secundary};
    }

    h1 {
      text-shadow: 2px 2px ${theme.secundary};
    }

    p {
      margin-top: 20px;
      margin-bottom: 20px;
      color: ${theme.secundary};
    }
`;

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: red;
  border: 2px solid ${theme.primary};
  cursor: pointer;

  &:disabled {
    transform: none;
    color: ${theme.gray};
    border: 2px solid ${theme.gray};
    box-shadow: none;
    cursor: default;
  }
`;
