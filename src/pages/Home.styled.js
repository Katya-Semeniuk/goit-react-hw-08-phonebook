import styled from 'styled-components';

export const Grid = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 0px;
  text-align: center;
  font-family: arial;
  font-weight: 400;
  color: #66e4ba;

  text-shadow: 1px 1px 2px black;
`;

export const Article = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;

  box-shadow: inset 0 -2em 3em rgba(0, 0, 0, 0.1), 0 0 0 1px rgb(255, 255, 255),
    0.2em 0.5em 1em rgba(0, 0, 0, 0.3);
`;

export const Heading = styled.div`
  font-family: arial;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: black;
`;

export const Text = styled.p`
  text-indent: 20px;
`;
