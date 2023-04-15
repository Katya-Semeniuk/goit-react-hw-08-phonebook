import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledLink, Container, Grid } from './AuthNav.styled';

export const AuthNav = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#64ffda',
      },
    },
  });

  return (
    <Container>
      <Grid>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" size="small">
            <StyledLink to="/register">Register</StyledLink>
          </Button>
        </ThemeProvider>
      </Grid>

      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" size="small">
          <StyledLink to="/login">Log In</StyledLink>
        </Button>
      </ThemeProvider>
    </Container>
  );
};
