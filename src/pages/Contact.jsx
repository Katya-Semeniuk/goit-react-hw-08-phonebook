import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectAllContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import ModalPage from 'components/ModalPage/ModalPage';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Grid, Title, Subtitle, Count, WrapButton } from './Contact.styled';

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8f50ca',
      },
    },
  });

  return (
    <Grid>
      <Title>
        <ContactPhoneIcon fontSize="large" />
        Phonebook
      </Title>

      {contacts.length === 0 && (
        <Subtitle>
          Your phone book doesn't contain any contacts. <br />
          Add new contacts right now!
        </Subtitle>
      )}
      {contacts.length === 1 && (
        <Subtitle>
          You have <Count>1</Count> contact
        </Subtitle>
      )}
      {contacts.length > 1 && (
        <Subtitle>
          You have <Count>{contacts.length} </Count> contacts
        </Subtitle>
      )}

      <WrapButton>
        <ThemeProvider theme={theme}>
          <Button
            type="button"
            onClick={toggleModal}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Add a new contact
          </Button>
        </ThemeProvider>
      </WrapButton>

      <Title> Your ContactsList</Title>
      <ContactFilter />
      {contacts.length > 0 && <ContactsList />}
      {showModal && (
        <ModalPage onClose={toggleModal}>
          <ContactForm closeModal={toggleModal} />
        </ModalPage>
      )}
    </Grid>
  );
}
