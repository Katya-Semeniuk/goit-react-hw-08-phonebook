import styled from 'styled-components';
import TextField from '@mui/material/TextField';

import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 450px;
  padding: 40px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
`;

export const Title = styled.p`
  text-align: center;
  color: #00bfa5;
  font-size: 25px;
  font-family: 'lato', sans-serif;
  font-weight: 700;
  @include text-shadow(longshadow(darken($bg, 30%), $bg, 50, 0.5));
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-left: 5px;
  margin-top: -15px;
`;

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#00bfa5',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#69f0ae',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00bfa5',
    },
  },
});
