import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  console.log('ContactsList', contacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      ContactsList
      {contacts && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>

              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
