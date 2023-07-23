import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 5px;
  margin-top: 10px;
`;

export const Item = styled.li`
  font-size: 14px;
  padding: 5px 15px;
  color: rgb(81 81 84);
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: white;
  transition: transform 0.2s linear, box-shadow 0.2s linear;

  &:hover {
    transform: scale(1.02);
    box-shadow: #93edce 0px 2px 8px 2px;
  }
  &:last-child:not(:only-child) {
    margin-bottom: 0;
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 15px;
  color: black;
`;
