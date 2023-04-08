import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrap, BtnLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrap>
      <p>Welcome, {user.name}</p>
      <BtnLogout type="button" onClick={handleLogOut}>
        Logout
      </BtnLogout>
    </Wrap>
  );
};
