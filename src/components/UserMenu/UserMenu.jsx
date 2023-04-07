import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrap, Btn_Logout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <p>Welcome, {user.name}</p>
      <Btn_Logout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn_Logout>
    </Wrap>
  );
};
