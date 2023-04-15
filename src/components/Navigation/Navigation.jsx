import { useAuth } from 'hooks';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Title, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Title to="/">
        <HomeRoundedIcon />
        Home
      </Title>

      {isLoggedIn && <Title to="/contacts">Contacts</Title>}
    </Nav>
  );
};
