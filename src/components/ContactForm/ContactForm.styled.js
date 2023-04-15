import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#00bfa5',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00bfa5',
  },
});
