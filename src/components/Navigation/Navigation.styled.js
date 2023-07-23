import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #52cca3;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
