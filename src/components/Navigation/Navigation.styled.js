import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 7px;
  }

  &:hover {
    color: #66e4ba;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
