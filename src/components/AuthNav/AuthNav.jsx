import { Button_reg, StyledLink, Button_log } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Button_reg type="button">
        <StyledLink to="/register">Register</StyledLink>
      </Button_reg>
      <Button_log>
        <StyledLink to="/login">Log In</StyledLink>
      </Button_log>
    </div>
  );
};
