import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { CssTextField, Form, Title, ErrorMessage } from './ContactForm.styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Email is required'),
  number: Yup.string().required('Number is required').max(13),
});
export const ContactForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const onAddNewContact = async (values, { resetForm }) => {
    if (!values.name || !values.number) {
      toast.warning('Write correct name or number');
      return;
    }
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    resetForm();
    closeModal();
  };
  const initialValues = { name: '', number: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onAddNewContact}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Title> Create new contact </Title>
          <Field
            as={CssTextField}
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {errors.name && touched.name ? (
            <ErrorMessage>{errors.name}</ErrorMessage>
          ) : null}
          <Field
            as={CssTextField}
            id="standard-basic"
            label="Number"
            variant="standard"
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {errors.number && touched.number ? (
            <ErrorMessage>{errors.number}</ErrorMessage>
          ) : null}

          <Button
            variant="contained"
            type="submit"
            style={{
              width: 150,
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#64ffda',
              borderColor: '#00bfa5',
              color: 'black',
            }}
          >
            {isSubmitting ? 'Processing' : ' Add contact'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

// const onAddNewContact = e => {
//   e.preventDefault();
//   const contactEl = {
//     name,
//     number,
//   };

//   if (!contactEl.name || !contactEl.number) {
//     toast.warning('Write correct name or number');
//     return;
//   }
//   dispatch(addContact(contactEl));

//   reset();
//   closeModal();
// };

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { toast } from 'react-toastify';

// import { CssTextField, Container, Title } from './ContactForm.styled';

// export const ContactForm = ({ closeModal }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         throw new Error(`Field type with a name ${name} is not processed`);
//     }
//   };

//   const onAddNewContact = e => {
//     e.preventDefault();
//     const contactEl = {
//       name,
//       number,
//     };

//     if (!contactEl.name || !contactEl.number) {
//       toast.warning('Write correct name or number');
//       return;
//     }
//     dispatch(addContact(contactEl));

//     reset();
//     closeModal();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <Container>
//       <Title> Create new contact </Title>
//       <Box
//         component="form"
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           '& > :not(style)': { m: 2.5, idth: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={onAddNewContact}
//       >
//         <CssTextField
//           id="standard-basic"
//           label="Name"
//           variant="standard"
//           onChange={handleInputChange}
//           value={name}
//           name="name"
//           type="text"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <CssTextField
//           id="standard-basic"
//           label="Number"
//           variant="standard"
//           onChange={handleInputChange}
//           value={number}
//           name="number"
//           type="tel"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <Button
//           variant="contained"
//           type="submit"
//           style={{
//             margin: '10px',
//             color: 'black',
//             backgroundColor: '#64ffda',
//             borderColor: '#00bfa5',
//             maxWidth: 150,
//             fontFamily: ' sans-serif',
//           }}
//         >
//           Add contact
//         </Button>
//       </Box>
//     </Container>
//   );
// };
