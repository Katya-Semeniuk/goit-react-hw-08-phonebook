import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { CssTextField, Title, Form, ErrorMessage } from './LoginForm.styled';
import Button from '@mui/material/Button';
import { Loader } from '../Loader/Loader';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
    resetForm();
  };
  const initialValues = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form autoComplete="off">
          <Title>Log in to your account</Title>

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
            disabled={isSubmitting}
            variant="contained"
            type="submit"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 120,
              color: 'black',
              backgroundColor: '#64ffda',
              borderColor: '#00bfa5',
            }}
          >
            {isSubmitting ? <Loader /> : 'Log In'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import { notCorrectLogIn } from '../Notification/Notification';
// import { CssTextField, Title } from './LoginForm.styled';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const emailValue = form.elements.email.value;
//     const passwordValue = form.elements.password.value;

//     if (!emailValue || !passwordValue) {
//       notCorrectLogIn();
//       return;
//     }
//     dispatch(
//       logIn({
//         email: emailValue,
//         password: passwordValue,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '35ch' },
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           maxWidth: 500,
//           marginRight: 'auto',
//           marginLeft: 'auto',
//           padding: '20px',
//           borderRadius: '4px',
//           background: '#eeefe740',
//           boxShadow:
//             'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <Title>Log in to your account</Title>
//         <CssTextField label="Email" type="email" name="email" required />

//         <CssTextField
//           label="Password"
//           type="password"
//           name="password"
//           required
//         />

//         <Button
//           variant="contained"
//           type="submit"
//           style={{
//             color: 'black',
//             backgroundColor: '#64ffda',
//             borderColor: '#00bfa5',
//             maxWidth: 120,
//           }}
//         >
//           Log In
//         </Button>
//       </Box>
//     </>
//   );
// };
