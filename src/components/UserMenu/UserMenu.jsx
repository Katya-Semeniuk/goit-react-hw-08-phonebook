import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrap, Greeting, Name } from './UserMenu.styled';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  const theme = createTheme({
    palette: {
      primary: {
        main: '#64ffda',
      },
    },
  });

  return (
    <Wrap>
      <Greeting>
        Welcome, <Name>{user.name}</Name>
      </Greeting>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </ThemeProvider>
    </Wrap>
  );
};
