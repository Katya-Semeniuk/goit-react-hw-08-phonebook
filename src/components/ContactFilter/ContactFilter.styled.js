import styled from 'styled-components';

export const Input = styled.input`
  font-size: 20px;
  padding: 8px 20px;
  border: 1px solid #64ffda;
  outline: none;
  border-radius: 20px;
  color: rgb(105, 105, 105);
  background-color: rgb(248, 248, 248);
  font-weight: 200;
  transition: box-shadow 0.3s ease 0s;
  &:focus,
  &:hover {
    border: 1px solid #00bfa5;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
