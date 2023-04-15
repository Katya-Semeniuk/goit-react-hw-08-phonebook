import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#00bfa5',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: '#69f0ae',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00bfa5',
    },
  },
});

export const Title = styled.p`
  text-align: center;
  color: #00bfa5;
  font-size: 25px;
  font-family: 'lato', sans-serif;
  font-weight: 700;
  @include text-shadow(longshadow(darken($bg, 30%), $bg, 50, 0.5));
`;
