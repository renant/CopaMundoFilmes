import styled from 'styled-components';
import { theme } from './theme';

export const MainHeader = styled.div`
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
