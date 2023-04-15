import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { visibleContacts } from 'redux/contacts/selectors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { teal } from '@mui/material/colors';
import { List, Item, WrapInfo, Info, Name } from './ContactsList.styled';

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
              <WrapInfo>
                <Info>
                  <Name>{name}</Name>
                  <p>{number}</p>
                </Info>

                <IconButton
                  sx={{ color: teal['A200'] }}
                  aria-label="delete"
                  onClick={() => onDeleteContact(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </WrapInfo>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};
