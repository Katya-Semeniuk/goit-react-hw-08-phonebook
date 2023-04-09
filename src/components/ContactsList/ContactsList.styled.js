import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  font-size: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;
