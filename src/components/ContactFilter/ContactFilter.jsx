import { useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { Input } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = query => {
    dispatch(filteredContacts(query));
  };

  return (
    <div>
      <label>
        <Input
          value={filter}
          onChange={e => changeFilter(e.currentTarget.value)}
          type="text"
          placeholder="Find contact by name"
        />
      </label>
    </div>
  );
};
