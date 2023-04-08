import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
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
      {contacts.length === 0 ? (
        <div>Add New Contact to your Phonebook</div>
      ) : (
        <p>You have {contacts.length} contacts</p>
      )}
      <ContactForm />
      <h2> Your ContactsList</h2>
      {contacts.length > 0 && <ContactsList />}
    </Grid>
  );
};
