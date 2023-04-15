import styled from 'styled-components';

export const Input = styled.input`
  font-size: 20px;
  padding: 8px 10px;
  border: 1px solid #64ffda;
  outline: none;
  border-radius: 5px;
  color: rgb(105, 105, 105);
  background-color: rgb(248, 248, 248);
  font-weight: 200;
  &:focus,
  &:hover {
    border: 1px solid #00bfa5;
  }
`;
