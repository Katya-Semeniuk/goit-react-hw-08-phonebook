import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled(NavLink)`
  display: flex;
  color: #66e4ba;
  text-decoration: underline;

  font-size: 25px;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;
