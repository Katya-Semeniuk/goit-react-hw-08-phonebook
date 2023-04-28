import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { CssTextField, Title } from './RegisterForm.styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { notCorrectRegistration } from '../Notification/Notification';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    if (!nameValue || !emailValue || !passwordValue) {
      notCorrectRegistration();
    }
    dispatch(
      register({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 350,
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '20px',
        borderRadius: '4px',
        backgroundColor: '#eeefe740',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Title>Fill out the form to register</Title>
      <CssTextField label="Username" type="text" name="name" required />
      <CssTextField label="Email" type="email" name="email" required />

      <CssTextField label="Password" type="password" name="password" required />

      <Button
        variant="contained"
        type="submit"
        style={{
          color: 'black',
          backgroundColor: '#64ffda',
          borderColor: '#00bfa5',
          maxWidth: 120,
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};
