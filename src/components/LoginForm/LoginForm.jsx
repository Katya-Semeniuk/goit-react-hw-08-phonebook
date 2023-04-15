import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { CssTextField, Title } from './LoginForm.styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 500,
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
        <Title>Enter your name and email to access</Title>
        <CssTextField label="Email" type="email" name="email" required />

        <CssTextField
          label="Password"
          type="password"
          name="password"
          required
        />

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
          Log In
        </Button>
      </Box>

      {/* <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form> */}
    </>
  );
};
