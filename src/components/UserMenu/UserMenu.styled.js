import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnLogout = styled.button`
  margin-left: 5px;
  cursor: pointer;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: rgb(90 182 228 / 40%);
  }
`;
