import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const MenuSelectedMovies = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${theme.white};
    margin-bottom: 20px;
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
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  };
  &:disabled {
    transform: none;
    color: ${theme.gray};
    border: 2px solid ${theme.gray};
    box-shadow: none;
    cursor: default;
  }
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
