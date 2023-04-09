import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { visibleContacts } from 'redux/contacts/selectors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { List, Item, Wrap } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(visibleContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {filteredContacts && (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <Wrap>
                <p>{name}</p>
                <p>{number}</p>
                <IconButton
                  aria-label="delete"
                  onClick={() => onDeleteContact(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Wrap>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};
