import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Form as FormikForm } from 'formik';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#00bfa5',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00bfa5',
  },
  width: '230px',
});

export const Form = styled(FormikForm)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-family: Georgia, serif;
  text-align: center;
  color: #6106b5;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-left: 5px;
  margin-top: -15px;
`;
