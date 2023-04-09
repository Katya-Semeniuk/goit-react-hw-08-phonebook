import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;

  &:not(:last-child) {
    margin-right: 7px;
  }

  &:hover {
    color: #66e4ba;
  }
`;
