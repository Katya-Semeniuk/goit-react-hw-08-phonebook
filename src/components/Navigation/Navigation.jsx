import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Title } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Title to="/">Home</Title>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
