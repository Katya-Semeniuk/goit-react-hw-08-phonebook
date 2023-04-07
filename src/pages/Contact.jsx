import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div></div>
      <ContactsList />
    </>
  );
}
