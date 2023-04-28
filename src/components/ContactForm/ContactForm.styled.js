import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#00bfa5',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00bfa5',
  },
  margin: '0px',
  width: '230px',
});

export const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: white;
`;

export const Title = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Georgia, serif;
  text-align: center;
  color: #6106b5;
`;
