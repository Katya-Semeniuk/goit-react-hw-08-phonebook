import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { CssTextField, Title, ErrorMessage, Form } from './RegisterForm.styled';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
    resetForm();
  };

  const initialValues = { name: '', email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Title>Fill out the form to register</Title>
          <Field
            as={CssTextField}
            label="Username"
            type="text"
            name="name"
            required
          />
          {errors.name && touched.name ? (
            <ErrorMessage>{errors.name}</ErrorMessage>
          ) : null}
          <Field
            as={CssTextField}
            label="Email"
            type="email"
            name="email"
            required
          />
          {errors.email && touched.email ? (
            <ErrorMessage>{errors.email}</ErrorMessage>
          ) : null}

          <Field
            as={CssTextField}
            label="Password"
            type="password"
            name="password"
            required
          />
          {errors.password && touched.password ? (
            <ErrorMessage>{errors.password}</ErrorMessage>
          ) : null}
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: 150,
              color: 'black',
              backgroundColor: '#64ffda',
              borderColor: '#00bfa5',
            }}
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

// import { register } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';
// import { CssTextField, Title } from './RegisterForm.styled';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     const nameValue = form.elements.name.value;
//     const emailValue = form.elements.email.value;
//     const passwordValue = form.elements.password.value;

//     dispatch(
//       register({
//         name: nameValue,
//         email: emailValue,
//         password: passwordValue,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '30ch' },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         maxWidth: 350,
//         marginRight: 'auto',
//         marginLeft: 'auto',
//         padding: '20px',
//         borderRadius: '4px',
//         backgroundColor: '#eeefe740',
//         boxShadow:
//           'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <Title>Fill out the form to register</Title>
//       <CssTextField label="Username" type="text" name="name" required />
//       <CssTextField label="Email" type="email" name="email" required />

//       <CssTextField label="Password" type="password" name="password" required />

//       <Button
//         variant="contained"
//         type="submit"
//         style={{
//           color: 'black',
//           backgroundColor: '#64ffda',
//           borderColor: '#00bfa5',
//           maxWidth: 120,
//         }}
//       >
//         Sign Up
//       </Button>
//     </Box>
//   );
// };
