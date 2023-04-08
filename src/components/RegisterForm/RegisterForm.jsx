import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Button } from './RegisterForm.styled';
// import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <TextField
    //     id="outlined-basic"
    //     label="Username"
    //     variant="outlined"
    //     type="text"
    //     name="name"
    //   />
    //   <TextField
    //     id="outlined-basic"
    //     label="Email"
    //     variant="outlined"
    //     type="email"
    //     name="email"
    //   />
    //   <TextField
    //     id="outlined-basic"
    //     label="Password"
    //     variant="outlined"
    //     type="password"
    //     name="password"
    //   />

    //   <Button type="submit">Sign Up</Button>
    // </Form>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
