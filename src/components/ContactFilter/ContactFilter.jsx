import { useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = query => {
    dispatch(filteredContacts(query));
  };

  return (
    <label>
      Find contacts by name
      <input
        value={filter}
        onChange={e => changeFilter(e.currentTarget.value)}
        type="text"
      />
    </label>
  );
};
