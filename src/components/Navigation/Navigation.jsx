import { useAuth } from 'hooks';
import { Title } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Title to="/">Home</Title>
      {isLoggedIn && <Title to="/contacts">Contacts</Title>}
    </nav>
  );
};
