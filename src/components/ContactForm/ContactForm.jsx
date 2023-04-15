import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { notCorrectContact } from 'components/Notification/Notification';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { CssTextField } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error(`Field type with a name ${name} is not processed`);
    }
  };

  const onAddNewContact = e => {
    e.preventDefault();
    const contactEl = {
      name,
      number,
    };

    if (!contactEl.name || !contactEl.number) {
      notCorrectContact();
      return;
    }
    dispatch(addContact(contactEl));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onAddNewContact}
    >
      <CssTextField
        id="standard-basic"
        label="Name"
        variant="standard"
        onChange={handleInputChange}
        value={name}
        name="name"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <CssTextField
        id="standard-basic"
        label="Number"
        variant="standard"
        onChange={handleInputChange}
        value={number}
        name="number"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button
        variant="contained"
        type="submit"
        style={{
          color: 'black',
          backgroundColor: '#64ffda',
          borderColor: '#00bfa5',
          maxWidth: 150,
          fontFamily: ' sans-serif',
        }}
      >
        Add contact
      </Button>
    </Box>
  );
};
