import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectAllContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import ModalPage from 'components/ModalPage/ModalPage';
import { Grid, Title, Subtitle, Count } from './Contact.styled';

export default function Contact() {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid>
      <Title>Phonebook</Title>
      {contacts.length === 0 ? (
        <div>Add new contact to your Phonebook</div>
      ) : (
        <Subtitle>
          You have <Count>{contacts.length}</Count> contacts
        </Subtitle>
      )}
      <button type="button" onClick={toggleModal}>
        Create a new contact
      </button>
      <ContactForm />

      <Title> Your ContactsList</Title>
      <ContactFilter />
      {contacts.length > 0 && <ContactsList />}
      {showModal && <ModalPage onClose={toggleModal} />}
    </Grid>
  );
}
