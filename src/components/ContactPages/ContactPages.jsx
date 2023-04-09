import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Grid } from './ContsctPages.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid>
      <title>Phonebook</title>
      <h2>Phonebook</h2>
      {contacts.length === 0 ? (
        <div>Add new contact to your Phonebook</div>
      ) : (
        <p>You have {contacts.length} contacts</p>
      )}
      <ContactForm />
      <h2> Your ContactsList</h2>
      <ContactFilter />
      {contacts.length > 0 && <ContactsList />}
    </Grid>
  );
};
