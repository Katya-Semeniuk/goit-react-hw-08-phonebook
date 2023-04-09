import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrap } from './UserMenu.styled';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  const theme = createTheme({
    palette: {
      primary: {
        main: '#66e4ba',
      },
    },
  });

  return (
    <Wrap>
      <p>Welcome, {user.name}</p>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </ThemeProvider>
    </Wrap>
  );
};
