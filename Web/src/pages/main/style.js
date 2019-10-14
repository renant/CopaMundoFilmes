import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const MenuSelectedMovies = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${theme.white};
    margin-bottom: 20px;
`;



export const CardContent = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    list-style-type: none;
  }
`;
